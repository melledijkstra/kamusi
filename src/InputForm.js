import React from 'react'
import {
    Form,
    Input
} from 'antd';
import PropTypes from 'prop-types'

export default class InputForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            componentSize: 'large'
        }
    }

    onFormLayoutChange = ({ size }) => {
        this.setState({
            componentSize: size
        })
    };

    render() {
        return (
            <Form
                layout="vertical"
                onValuesChange={this.onFormLayoutChange.bind(this)}
                size='large'
            >
                <Form.Item>
                    <Input.Search
                        placeholder="English / Kiswahili"
                        onChange={this.props.onChange}
                        size='large'
                        enterButton
                        style={{width: '100%'}}
                    />
                </Form.Item>
            </Form>
        )
    }

}

InputForm.propTypes = {
    onChange: PropTypes.func.isRequired
}
