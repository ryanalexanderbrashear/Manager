import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}. :)`)
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button 
                        title='Save Changes'
                        onPress={this.onButtonPress.bind(this)} 
                    />
                </CardSection>

                <CardSection>
                    <Button 
                        title='Text Schedule'
                        onPress={this.onTextPress.bind(this)}
                    />
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);