import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Modal from '@mui/material/Modal';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ref = useRef(true);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current) {
        {
          handleClose();
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <Card className={classes.card} variant='elevation'>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body1'>{post.title}</Typography>
      </div>
      <CardContent>
        <Button
          variant='filled'
          color='tertiary'
          size='small'
          onClick={() => setOpen(true)}
          style={{
            marginTop: '4px',
            marginBottom: '-14px',
          }}
        >
          Bio
        </Button>
        <Button
          variant='filled'
          color='tertiary'
          size='small'
          onClick={() => setOpen(true)}
          style={{
            marginTop: '4px',
            marginBottom: '-14px',
            position: 'absolute',
            right: '0%',
          }}
          onClick={() => setCurrentId(post._id)}
        >
          <ModeEditIcon />
        </Button>
        <Modal
          className={classes.modalClass}
          inputRef={ref}
          style={{
            position: 'fixed',
            top: '50%',
            margin: '0 auto',
            transform: 'translate(0, -50%)',
            overflowY: 'auto',
            backgroundImage: `url(${post.selectedFile})`,
            backgroundSize: 'cover',
          }}
          sx={{ border: 1.4, borderColor: 'gray' }}
          open={open}
          onClose={handleClose}
        >
          <Typography
            className={classes.whiteText}
            variant='body2'
            component='p'
          >
            <Typography variant='h5' style={{ marginTop: '11px' }}>
              {post.creator}
            </Typography>
            <Typography variant='h6' style={{ marginTop: '7px' }}>
              {post.title}
            </Typography>
            <Typography variant='body1' style={{ marginTop: '7px' }}>
              {`Joined ${moment(post.createdAt).fromNow()}`}
            </Typography>
            <Typography style={{ marginTop: '10px' }}>
              {post.tags[0]}
            </Typography>
            <Typography style={{ marginTop: '10px' }}>
              {post.tags[1]}
            </Typography>

            <Typography variant='body2' style={{ marginTop: '10px' }}>
              {post.message}
            </Typography>
          </Typography>
        </Modal>
      </CardContent>
    </Card>
  );
};

export default Post;
