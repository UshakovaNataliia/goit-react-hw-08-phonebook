import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../auth/authOperations';
import styles from './styles.module.css';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    };
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onRegister({ ...this.state });
        this.setState({ name: '', email: '', password: '' });
    };
    render() {
        const { name, email, password } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Name
                         <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            required
                            placeholder="name"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Email
                         <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                            placeholder="email"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Password
                         <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                            placeholder="password"
                            className={styles.input}/>
                    </label>
                <button type="submit" className={styles.button}>Sign up</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {onRegister: register})(RegisterView);