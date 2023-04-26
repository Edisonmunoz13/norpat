import React from "react";
import Image from "next/image";

const UsCard = () => {
  return (
    <div>
      <Image src="/image/nico.jpg" alt="nico" width={200} height={150} />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
    </div>
  );
};

export default UsCard;
