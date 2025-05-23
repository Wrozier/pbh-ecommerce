import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons';

export const saleType = defineType({
    name: 'sale',
    title: 'Sale',
    type: 'document',
    icon:TagIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Sale Title',
            type: 'string',
        }),
    ],

})
