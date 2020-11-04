import React from 'react';
import './App.css';
import validatePixelString from './validation/validation';
import TextField from './components/TextField';

function App() {

  React.useEffect(() => {
    console.log(validatePixelString(`<!-- Facebook Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2460375594235691');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=2460375594235691&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->`));
  }, []);

  return (
    <div className="App">
      <TextField />
    </div>
  );
}

export default App;
