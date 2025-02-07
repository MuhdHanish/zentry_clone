import { Button } from "../button";

const ImageClipBox = ({
    src,
    alt,
    title,
    clipClass
}: {
    src: string;
    alt: string;
    title: string;
    clipClass: string;
}) => {
    return (
        <div className={clipClass}>
            <img
                src={src}
                alt={alt}
                title={title}
            />
        </div>
    )
}

export const Contact = () => {
    return (
        <section
            id="contact"
            className="my-20 min-h-96 w-screen px-10"
        >
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src="/img/contact-1.webp"
                        alt="contact-image-1"
                        title="Lava Image"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="/img/contact-2.webp"
                        alt="contact-image-2"
                        title="Hand Image"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />
                </div>
                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="/img/swordman-partial.webp"
                        alt="swordman-partial-image"
                        title="Swordman Partial Image"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/swordman.webp"
                        alt="swordman-image"
                        title="Swordman Image"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>
                <div className="flex flex-col items-center text-center">
                    <h6 className="font-general text-sm uppercase md:text-[10px]">
                        Join Zentry
                    </h6>
                    <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
                        Let's b<b>u</b>ild the <br />
                        new era of g<b>a</b>ming <br />
                        t<b>o</b>gether.
                    </p>
                    <Button
                        id="contact-button"
                        title="Contact Us"
                        containerClass="mt-10 bg-blue-50"
                    />
                </div>
            </div>
        </section>
    )
}
