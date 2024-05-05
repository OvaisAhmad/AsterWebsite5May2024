import Link from "next/link";
import Image from "next/image";

export default function FeaturedImage({ post }) {
  const defaultFeaturedImage = ""; // Set your default image URL here

  let img = defaultFeaturedImage;

  if (post.featuredImage) {
    const size = post.featuredImage.node;
    img = size.sourceUrl;
  }

  const handleError = (event) => {
    // Replace the source of the image with the default source if an error occurs
    event.target.src = "/AsterDoctor.svg";
  };

  return (
    <Image
      className="dr_width100_md self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
      style={{ objectPosition: 'top center' }} 
      src={img}
      height={250}
      width={100}
      alt="Dr. Image"
      onError={handleError}
    />
  );
}
