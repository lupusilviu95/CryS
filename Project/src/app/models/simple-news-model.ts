import { Builder } from 'builder-pattern';
import { NewsModel} from './news-model';

export class SimpleNewsModel {
  news: string;
  about: string;
  description: string;
  source: string;
  title: string;
  createDate: Date;
  url: string;

  public static from(newsModel: NewsModel): SimpleNewsModel {
    return Builder<SimpleNewsModel>()
      .news(newsModel.news ? newsModel.news.value : null)
      .about(newsModel.about ? newsModel.about.value : null)
      .description(newsModel.description ? newsModel.description.value : null)
      .source(newsModel.source ? newsModel.source.value : null)
      .title(newsModel.title ? newsModel.title.value : null)
      .createDate(newsModel.create_date ? newsModel.create_date.value : null)
      .url(newsModel.url ? newsModel.url.value : null)

      .build();
  }
}
