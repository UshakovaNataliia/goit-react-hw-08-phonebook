import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../auth/authOperations';
import styles from './styles.module.css';

class LogInView extends Component {
    state = {
        email: '',
        password: ''
    };
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.logIn({ ...this.state });
        this.setState({ email: '', password: '' });
    };
    render() {
        const { email, password } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={styles.form}>
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
                <button type="submit" className={styles.button}>LogIn page</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { logIn: logIn })(LogInView);