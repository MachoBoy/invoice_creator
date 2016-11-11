import React from 'react'
import {
    TextField,
    Badge,
    Divider,
    FloatingActionButton,
    RaisedButton,
    Slider 
} from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'

export default class Services extends React.Component {
    constructor(props){
        super(props);
       
        this.handleSlider = this.handleSlider.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState)
	}

    handleSlider(event, value){
        this.setState({
            tax: value
        });
    }

    handleClick() {
        const services = {
            description: this.props.description,
            tax: this.props.tax,
            amount: this.props.amount,
        };
        this.props.onCreate(services);
        this.setState({
            description: '',
            tax: 1,
            amount: '',
        });
        this.descriptionInput.focus();
    }

    handleKeyPress(e) {
		if(e.charCode==13) {
			this.handleClick();
		}
	}

    // handleRemove(){
    //     this.setState({
    //         serviceData: update(this.state.contactService,
    //         { $splice: })
    //     })
    // }

    render() {
        return(
            <div>
                <Badge style={{fontSize: 30, align: 'center'}} badgeContent="">Services</Badge><br/>
                    <div>
                        <TextField
                            floatingLabelText="Description"
                            name="description"
                            style={styles.fullWidth}
                            underlineShow={false}
                            value={this.props.description}
                            onChange={this.handleChange}
                            ref={(ref) => {this.descriptionInput = ref}}
                        /><Divider />
                    Tax
                        <Slider
                            min={0}
                            max={15}
                            step={1}
                            style={{width: 200, marginLeft: 50,}}
                            name="tax"
                            defaultValue={1}
                            value={this.props.tax}
                            onChange={this.handleSlider}
                        /><Divider/>

                        <TextField
                            floatingLabelText="Amount"
                            name="amount"
                            style={styles.smallWidth}
                            underlineShow={false}
                            value={this.props.amount}
                            onChange={this.handleChange}
                        />
                        <FloatingActionButton
                            mini={true}
                            secondary={true}
                            style={styles.addButton}
                            onClick={this.props.onCreate}
                        >
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
            </div>
        );
    }
}

const styles={
    smallWidth: {
        width: 160,
        margin: 10,
    },
    mediumWidth: {
        width: 180,
        margin: 10,
    },
    fullWidth: {
        width: 250,
        margin: 10,
    },
    addButton: {
        marginLeft: 110,
    }
}
