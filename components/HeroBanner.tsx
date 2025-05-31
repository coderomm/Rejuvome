import Image from 'next/image'

export default function HeroBanner() {
    return (
        <section className="hero-banner">
            <Image
                src="/images/logo-removebg-preview.png"
                alt="Rejuvome logo"
                width={200}
                height={100}
                className="logo-img"
                priority
            />
            <Image
                src="/images/Rejuvome Homepage Banner-Desktop.webp"
                alt="Rejuvome hero banner"
                width={1920}
                height={800}
                className="hero-banner-img-desktop"
                priority
            />
            <Image
                src="/images/Rejuvome Homepage Banner-Mobile.webp"
                alt="Rejuvome hero banner"
                width={768}
                height={600}
                className="hero-banner-img-mobile"
                priority
            />
        </section>
    )
}