import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import { Home } from '../home.component';
import messages from '../home.messages';

describe('Home: Component', () => {
  const defaultProps = {
    fetchMaintainers: () => {},
    items: [1, 2, 3],
    language: 'en',
    setLanguage: () => {},
    router: {},
  };

  const component = (props) => (
    <Home {...defaultProps} {...props} />
  );

  it('should render Home root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.home')).to.have.length(1);
  });

  it('should render <Helmet/>', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(Helmet)).to.have.length(1);
  });

  it('should pass title prop to <Helmet/>', () => {
    const wrapper = shallow(component({}));
    const helmetProps = wrapper.find(Helmet).props();

    expect(helmetProps.title).to.be.a('string');
  });

  it('should render .home__title', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.home__title')).to.have.length(1);
  });

  it('should render welcome message inside .home__title', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.home__title').find(FormattedMessage).prop('id')).to.equal(messages.welcome.id);
  });
});
