import Image from 'next/image'

const partners = [
    { id: 1, image: '/images/www-logo-1.png', alt: 'Partner 1' },
    { id: 2, image: '/images/www-logo-2.png', alt: 'Partner 2' },
    { id: 3, image: '/images/www-logo-3.png', alt: 'Partner 3' },
    { id: 4, image: '/images/www-logo-4.png', alt: 'Partner 4' }
]

export default function WorkWith() {
    return (
        <section className="www-wrapper page-spacing page-width">
            <div className="heading-wrapper">
                <h2 className="www-title section-title">We work with</h2>
            </div>
            <div className="www-img-wrapper">
                {partners.map((partner) => (
                    <Image
                        key={partner.id}
                        className="www-img"
                        src={partner.image}
                        width={200}
                        height={100}
                        alt={partner.alt}
                    />
                ))}
            </div>
        </section>
    )
}