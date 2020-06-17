import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function RepoWebView({ route, navigation }) {
  const { url } = route.params; // url da rota passada pelo componente card
  return <WebView source={{ uri: url + '/blob/master/README.md' }} style={{ marginTop: 20 }} />; // retorna uma webView do readme/master daquele repositório
}
