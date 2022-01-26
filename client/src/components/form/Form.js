import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  useFormControl,
  Container,
} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { deletePost } from '../../actions/posts';
import { useTheme } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useGlobalContext } from '../../context';

const Form = ({ currentId, setCurrentId }) => {
  const theme = useTheme();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: [''],
    selectedFile: '',
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (post) setPostData(post);
    window.scrollTo(0, 0);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);

    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  const { setCategory } = useGlobalContext();

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        style={{ justifyContent: 'left' }}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6' style={{ margin: '0 auto' }}>
          {currentId ? 'Edit' : 'Create'} Profile
        </Typography>

        <>
          {currentId ? null : (
            <Container
              style={{
                marginLeft: '8px',
                marginRight: '0px',
                marginTop: '14px',
                marginBottom: '10px',
                padding: '0px',
              }}
            >
              <Button
                variant='outlined'
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{
                  marginTop: '-1.4px',
                  marginRight: '14px',
                  background: '#e3f2fd',
                }}
              >
                {postData.tags.length > 1 ? postData.tags : 'Department'}
              </Button>

              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem
                  onClick={(e) => {
                    setPostData({ ...postData, tags: 'Management' });

                    setCategory('Management');
                    handleClose();
                  }}
                >
                  Management
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setPostData({ ...postData, tags: 'Production' });
                    setCategory('Production');

                    handleClose();
                  }}
                >
                  Production
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setPostData({ ...postData, tags: 'Support' });
                    setCategory('Support');

                    handleClose();
                  }}
                >
                  Support
                </MenuItem>
              </Menu>
            </Container>
          )}
        </>
        <TextField
          name='creator'
          variant='outlined'
          placeholder='Full Name'
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name='title'
          variant='outlined'
          placeholder='Job Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          multiline
          rows={2}
          maxRows={14}
          name='message'
          variant='outlined'
          placeholder='Details'
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <div
          className={classes.fileInput}
          style={{ marginTop: '7px', marginLeft: '8px', marginBottom: '14px' }}
        >
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          style={{ marginLeft: '8px', marginRight: '8px' }}
          fullWidth={true}
        >
          Submit
        </Button>
        <Button
          variant='contained'
          color='tertiary'
          size='small'
          onClick={clear}
          style={{ marginLeft: '8px', marginRight: '8px' }}
          fullWidth={true}
        >
          Clear
        </Button>
        {currentId ? (
          <Button
            variant='contained'
            color='secondary'
            size='small'
            onClick={() => dispatch(deletePost(post._id))}
            fullWidth={true}
            style={{ marginTop: '10px', marginLeft: '8px', marginRight: '8px' }}
          >
            Delete
          </Button>
        ) : null}
      </form>
    </Paper>
  );
};

export default Form;
