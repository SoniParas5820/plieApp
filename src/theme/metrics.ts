

import { Dimensions, PixelRatio } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen');

const isTablet = screenWidth >= 768 && screenHeight >= 1024;

function normalize(size: number, based = 'width') {
  const standardScreenHeight = 892 - 76;
  const standardScreenWidth = 412;

  const deviceHeight = screenWidth > screenHeight ? screenWidth : screenHeight;
  const deviceWidth = screenWidth > screenHeight ? screenHeight : screenWidth;

  let offset = 0;
  if (initialWindowMetrics) {
    const { top, bottom } = initialWindowMetrics.insets;
    offset = top + bottom;
  }

  const heightBaseScale = (deviceHeight - offset) / standardScreenHeight;
  const widthBaseScale = deviceWidth / standardScreenWidth;

  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// Width scaling
const wp = (size: number) => {
  const scaledSize = normalize(size, 'width');
  return isTablet ? scaledSize * 1.0 : scaledSize;
};

// Height scaling
const hp = (size: number) => {
  const scaledSize = normalize(size, 'height');
  return isTablet ? scaledSize * 1.0 : scaledSize;
};

// Font scaling
const fp = (size: number) => {
  const scaledSize = normalize(size);
  return isTablet ? scaledSize * 0.60 : scaledSize;
};

export { wp, hp, fp, screenWidth, screenHeight, isTablet };
