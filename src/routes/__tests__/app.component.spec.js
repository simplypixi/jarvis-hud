import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';

import { App } from '../app.component';


describe('App: Component', () => {
  const children = <div className="app__children">Children</div>;
  const defaultProps = {
    setLanguage: () => {
    },
    language: 'en',
    match: {
      params: {
        lang: 'en',
      },
    },
    location: {},
    history: {
      push: () => { },
    },
  };

  const component = (props) => (
    <App {...defaultProps} {...props}>
      {children}
    </App>
  );

  it('should redirect to /404 when given locale doesn\'t exist', () => {
    const router = {
      match: {
        params: {
          lang: 'non-existing-locale',
        },
      },
      history: {
        push: spy(),
      },
    };

    mount(component(router));
    expect(router.history.push).to.have.been.calledWith('/404');
  });

/*  it('should set DEFAULT_LOCALE when no lang param is given', () => {
    const setLanguage = spy();
    const router = {
      match: {
        params: {},
      },
      history: {
        push: () => {},
      },
    };

    mount(component({ ...router, setLanguage }));
    expect(setLanguage).to.have.been.calledWith(DEFAULT_LOCALE);
  });*/
});
