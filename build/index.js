var person = {
  name: 'Syeda Ismat Farjana',
  location: 'Melbourne, Australia',
  occupation: {
    title: 'Stay home mom, physician, coder',
    employer: '@home'
  },
  photo: './images/syedaismatfarjana.jpg',
  updates: [{
    platform: 'twitter',
    status: 'I\'m happy, hope you\'re happy too!'
  }, {
    platform: 'twitter',
    status: 'The better the singer\'s voice, the harder it is to hear what they\'re saying'
  }, {
    platform: 'twitter',
    status: 'Fear makes the wolf look bigger'
  }, {
    platform: 'facebook',
    status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
  }]
};

class Photo extends React.Component {

  render() {

    return React.createElement(
      'div',
      { className: 'photo' },
      React.createElement('img', { src: this.props.photo, alt: 'Photo' })
    );
  }
}

class Bio extends React.Component {

  render() {

    return React.createElement(
      'div',
      { className: 'bio' },
      React.createElement(
        'h1',
        { className: 'name' },
        this.props.name
      ),
      React.createElement(
        'h2',
        { className: 'location' },
        this.props.location
      ),
      React.createElement(
        'div',
        { className: 'occupation' },
        React.createElement(
          'p',
          null,
          this.props.occupation
        )
      )
    );
  }
}

class Updates extends React.Component {

  render() {

    return React.createElement(
      'div',
      { className: 'updates' },
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          { className: 'update' },
          'Updates'
        ),
        React.createElement(
          'li',
          { className: 'update' },
          'Updates'
        )
      )
    );
  }
}

class Card extends React.Component {
  render() {

    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement(Photo, { photo: "images/syedaismatfarjana.jpg" }),
      React.createElement(Bio, { name: "Syeda Ismat Farjana", location: "Melbourne, Australia", occupation: "Stay home mom, physician, coder" }),
      React.createElement(Updates, null)
    );
  }
}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));