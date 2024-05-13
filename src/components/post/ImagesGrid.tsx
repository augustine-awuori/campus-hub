import React from "react";
import { Flex, Image } from "@chakra-ui/react";

interface Props {
  images: string[];
}

const ImageGrid: React.FC<Props> = ({ images }) => {
  let imageComponent: JSX.Element | null = null;

  switch (images.length) {
    case 1:
      imageComponent = (
        <Image
          key={images[0]}
          src={images[0]}
          alt="Image"
          width="100%"
          height="auto"
        />
      );
      break;
    default:
      break;
  }

  const renderImages = () => {
    if (imageComponent) {
      return (
        <Flex key={0} width="100%" marginBottom="1rem" justifyContent="center">
          {imageComponent}
        </Flex>
      );
    }

    if (images.length === 2) {
      return images.map((image, index) => (
        <Flex
          key={index}
          width="50%"
          marginBottom="1rem"
          justifyContent="center"
        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width="100%"
            height="auto"
          />
        </Flex>
      ));
    }

    const firstImage = images[0];
    const secondImage = images[1];
    const thirdImage = images[2];

    return (
      <>
        <Flex key={0} width="50%" marginBottom="1rem" justifyContent="center">
          <Image src={firstImage} alt="Image 1" width="100%" height="auto" />
        </Flex>
        <Flex key={1} direction="column" width="50%">
          <Image src={secondImage} alt="Image 2" height="50%" width="100%" />
          <Image src={thirdImage} alt="Image 3" height="48%" width="100%" />
        </Flex>
      </>
    );
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {renderImages()}
    </Flex>
  );
};

export default ImageGrid;
