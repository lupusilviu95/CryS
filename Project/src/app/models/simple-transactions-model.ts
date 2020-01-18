import { Builder } from 'builder-pattern';
import { GetTransactionsResponse, TransactionModel } from './transactions-model';

export class SimpleTransactionsModel {
  transactions: Array<SimpleTransactionModel> = new Array<SimpleTransactionModel>();

  public static from(transactions: GetTransactionsResponse): SimpleTransactionsModel {
    const simpleModel = new SimpleTransactionsModel();
    transactions.results.bindings.forEach(transaction => {
      simpleModel.transactions.push(SimpleTransactionModel.from(transaction));
    });
    return simpleModel;
  }
}

export class SimpleTransactionModel {
  symbol: string;
  amount: string;
  receiver: string;
  sender: string;
  amountUsd: string;
  dateTraded: Date;
  hash: string;

  public static from(transaction: TransactionModel): SimpleTransactionModel {
    return Builder<SimpleTransactionModel>()
      .symbol(transaction.symbol ? transaction.symbol.value : null)
      .amount(transaction.amount ? transaction.amount.value : null)
      .receiver(transaction.receiver ? transaction.receiver.value : null)
      .sender(transaction.sender ? transaction.sender.value : null)
      .amountUsd(transaction.amount_usd ? transaction.amount_usd.value : null)
      .dateTraded(transaction.date_traded ? transaction.date_traded.value : null)
      .hash(transaction.hash ? transaction.hash.value : null)
      .build();
  }

}
