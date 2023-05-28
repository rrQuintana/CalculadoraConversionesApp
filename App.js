import { PaperProvider } from 'react-native-paper';
import Tabs from './src/Tabs';

export default function App() {
  return (
    <PaperProvider>
      <Tabs />
    </PaperProvider>
  );
}
