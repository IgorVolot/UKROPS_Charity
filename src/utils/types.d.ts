/*
 * /
 *  *  *
 *  *  *   ************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *  *   ************************************************************************
 *  *  *
 * /
 */



// declare module 'yet-another-react-lightbox' {
//   import type React from 'react';
//
//   export interface LightboxProps {
//     open: boolean;
//     close: () => void;
//     slides: { src: string }[];
//     currentIndex: number;
//     setCurrentIndex: (index: number) => void;
//   }
//
//   const Lightbox: React.FC<LightboxProps>;
//
//   export default Lightbox;
// }

export interface Image {
  src: string;
  alt: string;
}