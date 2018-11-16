import React from 'react';
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from 'reactstrap';

class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
          {this.props.item.text}
        </Button>
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </span>
    );
  }
}

class PopoverComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popovers: [
        {
          placement: 'top',
          text: 'Top'
        },
        {
          placement: 'bottom',
          text: 'Bottom'
        },
        {
          placement: 'left',
          text: 'Left'
        },
        {
          placement: 'right',
          text: 'Right'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Row>
            <Col xs="12" md="12">
              <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                  <i className="mdi mdi-priority-high mr-2"> </i>
                  Popovers
                </CardTitle>
                <CardBody>
                  { this.state.popovers.map((popover, i) => {
                    return <PopoverItem key={i} item={popover} id={i} />;
                  })}
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    );
  }
}

export default PopoverComponent;
