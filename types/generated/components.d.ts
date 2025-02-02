import type { Schema, Struct } from '@strapi/strapi';

export interface MessageNotification extends Struct.ComponentSchema {
  collectionName: 'components_message_notifications';
  info: {
    description: '';
    displayName: 'notification';
  };
  attributes: {
    desc: Schema.Attribute.String & Schema.Attribute.Required;
    notificationCreatedAt: Schema.Attribute.DateTime;
    notificationFrom: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'pgOwner'>;
    notificationTo: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'All'>;
    pg: Schema.Attribute.Relation<'oneToOne', 'api::pg.pg'>;
    pgId: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['Regular', 'Events', 'Special']>;
  };
}

export interface PgDetailsRooms extends Struct.ComponentSchema {
  collectionName: 'components_pg_details_rooms';
  info: {
    description: '';
    displayName: 'rooms';
  };
  attributes: {
    avaiblity: Schema.Attribute.Enumeration<['Available', 'Unavailable']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Available'>;
    capacity: Schema.Attribute.String;
    desc: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    rent: Schema.Attribute.Decimal;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'message.notification': MessageNotification;
      'pg-details.rooms': PgDetailsRooms;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
