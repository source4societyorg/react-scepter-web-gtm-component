import React from 'react';
import { ifTrueElseDefault } from '@source4society/scepter-utility-lib';
import { propTypes, defaultProps } from './props';

export class GTMComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    /* eslint-disable */
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push(
        {
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        }
      );
      var j=d.createElement(s),
      dl=ifTrueElseDefault(l!='dataLayer', '&l='+l, '');
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      d.head.appendChild(j);
    })(window,document,'script','dataLayer', this.props.containerId);
  }

  render() { return null; }
};

GTMComponent.propTypes = propTypes;
GTMComponent.defaultProps = defaultProps; 
export default GTMComponent;