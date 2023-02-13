import React from 'react';
import { Theme } from '../components/ui/styleUtils';
import { RootRouteProps } from '../routes';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Column } from '../components/ui';

export const SplashLogoScreen: React.FC<RootRouteProps> = () => {
  return (
    <Column>
      <LinearGradient
        colors={['#F59B4B', '#E86E04']}
        useAngle={true}
        angle={180}
        style={Theme.Styles.splashScreen}>
        <Image source={Theme.InjiLogoWhite} height={100} width={100} />
      </LinearGradient>
    </Column>
  );
};