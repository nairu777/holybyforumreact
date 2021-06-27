import SearchTopicList from '../components/search/SearchTopicList';
import {connect} from 'react-redux';
//todo: make searchfunction
const mapStateToProps = state =>({
  data:state.term
});

export default connect(mapStateToProps)(SearchTopicList);