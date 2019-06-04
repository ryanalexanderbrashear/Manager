import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import _ from 'lodash';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch();
    }

    renderItem = ({ item }) => <ListItem employee={item} />;

    render() {
        console.log(this.props);
        return (
            <FlatList data={this.props.employees} keyExtractor={(item) => item.key} renderItem={this.renderItem} />
        );
    }
}

const mapStateToProps = state => {
    const employees = Object.keys(state.employees).map(employeeKey => ({
        ...state.employees[employeeKey],
        uid: employeeKey
    }));

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);