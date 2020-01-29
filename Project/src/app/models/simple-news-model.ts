import { Builder } from 'builder-pattern';
import { NewsModel} from './news-model';

export class SimpleNewsModel {
  news: string;
  abouts: SimpleNewsAboutCoinMetadata[];
  description: string;
  source: string;
  title: string;
  createDate: Date;
  url: string;

  public static from(newsModel: NewsModel): SimpleNewsModel {
    let newsAbouts = [];
    if (newsModel.about && newsModel.about_ids) {
      const abouts = newsModel.about.value.split(',');
      const aboutIds = newsModel.about_ids.value.split(',');
      abouts.forEach((item, index) => {
        if (item.length > 0) {
          newsAbouts.push({symbol: abouts[index], id: aboutIds[index]});
        }
      });
    }
    if (newsAbouts.length < 1) {
      newsAbouts = null;
    }

    return Builder<SimpleNewsModel>()
      .news(newsModel.news ? newsModel.news.value : null)
      .abouts(newsAbouts)
      .description(newsModel.description ? newsModel.description.value : null)
      .source(newsModel.source ? newsModel.source.value : null)
      .title(newsModel.title ? newsModel.title.value : null)
      .createDate(newsModel.create_date ? newsModel.create_date.value : null)
      .url(newsModel.url ? newsModel.url.value : null)
      .build();
  }

  public static toSchema(simpleNewsModel: SimpleNewsModel): any {
    const schema: any = {};
    schema['@type'] = 'News';
    Object.keys(simpleNewsModel).forEach(property => {
      const value = Reflect.get(simpleNewsModel, property);
      if (value) {
        schema[property] = Reflect.get(simpleNewsModel, property);
      }
    });
    return schema;
  }
}

export interface SimpleNewsAboutCoinMetadata {
  symbol: string;
  id: string;
}
