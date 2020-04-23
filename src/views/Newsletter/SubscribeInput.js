import React, { Fragment, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
// import modalStyle from "../../assets/jss/material-dashboard-pro-react/modalStyle.js";
import modalStyle from "../../assets/jss/material-kit-react/modalStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import validator from 'email-validator';

import integrate from '../../integrate';
import config from '../../config';

import "./SubscribeInput.scss";
import '../../views/Components/Components.scss';

const useStyles = makeStyles(modalStyle);
const subscribeEndpoint = config.endpoints.subscribe;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SubscribeInput() {
  const [modal, setModal] = useState(false);
  const classes = useStyles();
  const [isNotSub, setIsNotSub] = useState(true);
  const [showMailErr, setShowMailErr] = useState(false);
  const logo = (
    <img
      style={{ width: '80%' }}
      alt='IIT Tech Ambit'
      src='https://cdn.iit-techambit.in/websiteAssets/logo.png'
      className='logo'
    />
  );

  const errMsg = <a style={{ color: 'red' }}>Please enter a valid email !</a>;
  const textInput = React.createRef();

  const handleSmash = () => {
    const inputMail = textInput.current.value;
    if (validator.validate(inputMail)) {
      const tryIt = document.getElementById('tryIt');
      tryIt.click();
      setIsNotSub(false);
      integrate.postData(subscribeEndpoint, { email: inputMail });
    } else setShowMailErr(true);
  };

  const checkForEnter = () => {
    const input = document.getElementsByTagName('input');
    input[0].addEventListener('keyup', event => {
      event.preventDefault();
      if (event.keyCode === 13) {
        handleSmash();
      }
    });
  };
 
  return (
    <div>
      <div className="ModalBtn">
        <Button color="primary" onClick={() => setModal(true)}>
          Subscribe
        </Button>
      </div>
    <div className={classes.modalBody}>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h3 className={classes.modalTitle}>
            {" "}
            Become tech savvy in just 5 minutes
          </h3>
        </DialogTitle>
        <div className="form">
          <input
            type="text"
            placeholder="enter email"
            name="email"
            ref={textInput}
            onChange={checkForEnter}
          />
          <button type="submit" onClick={handleSmash} id="tryIt" class="tryIt">
            Try it
          </button>
        </div>
      </Dialog>
      </div>
    </div>
  );
}
