import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Segment, Button, List } from 'semantic-ui-react';
import Search from '../components/Search';
import Client from '../components/Client';
import { addSearchFilter, asyncGetData } from '../redux/action/actionCreators';


class SearchPanel extends Component {
  componentDidMount() {
    if (!this.props.data.allDataLoaded) this.props.onLoading();
  }

  render() {
    return (
      <Segment className="search-panel" inverted floated="left">
        <Search onSearch={ this.props.onSearch } onLoading={ this.props.onLoading } />
        <List bulleted>
          {this.props.data.ids.map(el => (
            <Client
              key={ el }
              id={ el }
              client={ this.props.data.clients[el].general }
              select={ this.props.select }
            />
          ))}
        </List>
        <Link to="/user/new">
          <Button>
                    Add new user
          </Button>
        </Link>
      </Segment>
    );
  }
}
SearchPanel.propTypes = {
  data: PropTypes.object,
  select: PropTypes.func,
  onSearch: PropTypes.func,
  onLoading: PropTypes.func
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  onSearch: bindActionCreators(addSearchFilter, dispatch),
  onLoading: bindActionCreators(asyncGetData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
