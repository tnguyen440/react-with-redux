import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActons from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component  {
  constructor(props, context) {
      super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    //debugger;
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  //debugger;
  return{
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActons, dispatch)
  };
}

//                    take results of this function and assing to this function
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
