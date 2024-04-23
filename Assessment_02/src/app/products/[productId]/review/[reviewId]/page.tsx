import React from 'react'
import { notFound } from 'next/navigation'

export default function ProductDetails({ params, }:
    { params: { 
        productId: string,
        reviewId: string
    } }
) {
    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <div>
            <h1>Review {params.reviewId} about product {params.productId}</h1>
        </div>
    )
}
