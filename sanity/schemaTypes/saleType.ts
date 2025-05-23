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
        defineField({
            name: 'description',
            title: 'Sale Description',
            type: 'string',
        }),
        defineField({
            name: 'badge',
            title: 'Discount Badge',
            type: 'string',
            description: 'Discount badge Ratio',
        }),
        defineField({
            name: 'discountAmount',
            title: 'Discount Amount',
            type: 'number',
            description: 'Discount Amount in percentage',
        }),
        defineField({
            name: 'couponCode', 
            title: 'Coupon Code',
            type: 'string',
            description: 'Coupon code for the sale',
        }),
        defineField({ 
            name: 'validFrom',
            title: 'Valid From',
            type: 'datetime',
        }),
        defineField({
            name: 'validUntil',
            title: 'Valid Until',
            type: 'datetime',
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            description: 'Is the sale active/not active?',
            initialValue: true,
        }),
        defineField({
            name: 'image',
            title: 'Product',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],

})
