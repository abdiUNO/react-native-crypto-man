import { NativeModules } from 'react-native';

type CryptoManType = {
  multiply(a: number, b: number): Promise<number>;
};

const { CryptoMan } = NativeModules;

export default CryptoMan as CryptoManType;
