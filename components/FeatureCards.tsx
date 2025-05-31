import Image from 'next/image'

export default function FeatureCards() {
  return (
    <section className="items-wrapper page-width">
      <div className="feature-card-group-1">
        <div className="feature-card-1 feature-card mx-auto">
          <div className="feature-card-1-content">
            <span>
              <span className="feature-card-1-content-span">
                "Harboring a trillion organisms at any given time, Humans are an
                ecosystem, not an organism.
              </span>
              <span className="feature-card-1-content-span2">
                They participate in the 'song of life' that we humans are, orchestrating our - every biological
                experience"
              </span>
            </span>
          </div>
          <Image
            className="feature-card-1-img md-hidden"
            src="/images/rectangle-3400.png"
            width={300}
            height={200}
            alt=""
          />
          <Image
            className="feature-card-1-img hidden md-block"
            src="/images/i1.png"
            width={300}
            height={200}
            alt=""
          />
        </div>
        <div className="feature-card-2 feature-card mx-auto">
          <Image
            className="feature-card-2-img md-hidden"
            src="/images/rectangle-3420.png"
            width={300}
            height={200}
            alt=""
          />
          <Image
            className="feature-card-2-img hidden md-block"
            src="/images/i2.png"
            width={300}
            height={200}
            alt=""
          />
          <p className="feature-card-2-content-para">
            The crosstalk between humans and microbiome is the next reservoir of biological knowledge, and we are to
            uncover it.
            <br />
            <br />
            At Rejuvome, we at fascinated by the world within, with a strong conviction in leveraging it for increasing
            healthspan.
          </p>
        </div>
      </div>
      <div className="feature-card-group-2">
        <div className="feature-card-3 feature-card mx-auto">
          <Image
            className="feature-card-3-img mx-auto md-hidden"
            src="/images/image-20.png"
            width={300}
            height={200}
            alt=""
          />
          <Image
            className="feature-card-3-img mx-auto hidden md-block"
            src="/images/i3.png"
            width={300}
            height={200}
            alt=""
          />
          <div className="feature-card-3-content">
            <h6 className="our-mission">Our Mission</h6>
            <p className="feature-card-3-para">
              Transform the way we age by harnessing microbiome research to deliver
              personalized, life-enhancing solutions.
            </p>
          </div>
        </div>
        <div className="feature-card-4 feature-card mx-auto">
          <Image
            className="feature-card-4-img mx-auto md-hidden"
            src="/images/image-30.png"
            width={300}
            height={200}
            alt=""
          />
          <Image
            className="feature-card-4-img mx-auto hidden md-block"
            src="/images/i4.png"
            width={300}
            height={200}
            alt=""
          />
          <div className="feature-card-4-content">
            <h6 className="our-vision">Our Vision</h6>
            <p className="feature-card-4-para">
              Lead the age of microbiome-driven rejuvenation, where gut health rewrites
              the rules of ageing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}