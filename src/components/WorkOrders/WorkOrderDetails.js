import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { 
    Grid, 
    Typography, 
    Divider, 
    Card, 
    CardContent, 
    CardActions, 
    Button, 
    List, 
    ListItem, 
    ListItemText, 
    TextField, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem 
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import jsonData from '../../stubs/workOrders.json';
import { getLocationNames } from '../../util/location';

const useStyles = makeStyles(() => createStyles({
    root: {
      padding: '20px',

        '& .title-textfield': {
            width: '95%',
        },
        '& .title-type': {
            margin: '.5em',

            '& .title-type__id': {
                fontSize: '.65em',
            },
        },

        '& .updated-type': {
            margin: '2em',
        },

        '& .divider': {
            margin: '1em',
        },

        '& .description-type': {
            margin: '2em .875em 1em'
        },

        '& .list': {
            padding: 0,
        },

        '& .list-item-select': {
            minWidth: '150px', 
            position: 'relative', 
            top: '10px', 
            left: '-15px',
        },

        '& .actions': {
            float: 'right',

            '& .actions__button': {
                margin: '1em', 
                fontSize: '18px',
            },
        },
    },
  }));

const WorkOrderDetails = () => {
    const classes = useStyles();
    const params = useParams();

    const [dataFetched, setDataFetched] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [values, setValues] = useState({});
    const [edits, setEdits] = useState({});

    useEffect(() => {
        const workOrderDetails = jsonData.data.workOrders.find((order) => order.id === params.id);

        if (workOrderDetails && !workOrderDetails.title) {
            workOrderDetails.title = '(No Title)';
        }

        setValues(workOrderDetails);
        setEdits(workOrderDetails);
        setDataFetched(true);
    }, [params.id]);

    if (!dataFetched) {
        return (
            <div className={classes.root} data-testid="loading">
                <Card data-testid="loading-card">
                    <CardContent data-testid="loading-content">
                        Loading...
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (!params.id || !values) {
        return (
            <div className={classes.root} data-testid="work-order-not-found">
                <Card data-testid="work-order-not-found-card">
                    <CardContent data-testid="work-order-not-found-content">
                        This work order ID does not exist
                    </CardContent>
                </Card>
            </div>
        )
    }

    const { updatedAt, number, category, createdAt, title, description, priority, location } = values;
    const { title: titleEdit, description: descriptionEdit, priority: priorityEdit} = edits;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdits(Object.assign({}, edits, { [name]: value }))
    }

    const handleClick = (doSave) => {
        if (editMode && doSave) {
            setValues(edits);
        } else {
            setEdits(values);
        }

        setEditMode(!editMode)
    }

    return (
        <div className={classes.root} data-testid="work-order-details">
            <Card>
                <CardContent>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            {
                                editMode
                                    ? (
                                        <TextField
                                            className="title-textfield"
                                            name="title"
                                            label="Title"
                                            value={titleEdit}
                                            onChange={handleChange}
                                            variant="outlined"
                                            data-testid="title-textfield"
                                        />
                                    ) : (
                                        <Typography className="title-type" variant="h5">
                                            <span>{title}</span> <span className="title-type__id" data-testid="title-idView" >#{number}</span>
                                        </Typography>
                                    )
                            }
                        </Grid>
                        <Grid item>
                            <Typography className="updated-type" variant="body2">
                                Updated: {moment(updatedAt).format('MM/DD/YY h:mm:ss a')}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider className="divider" variant="middle"/>
                    {
                        editMode
                            ? (
                                <TextField
                                    name="description"
                                    label="Description"
                                    multiline
                                    fullWidth
                                    value={descriptionEdit || ''}
                                    onChange={handleChange}
                                    variant="outlined"
                                    data-testid="description-textfield"
                                />
                            ) : (
                                <Typography className="description-type" variant="body1" color="textSecondary">
                                    {description || '-'}
                                </Typography>
                            )
                    }
                    <List className="list">
                        <ListItem>
                            {
                                editMode
                                    ? (
                                        <FormControl className="list-item-select" variant="outlined" data-testid="priority-select">
                                            <InputLabel>Priority</InputLabel>
                                            <Select
                                                labelId="priority"
                                                name="priority"
                                                value={priorityEdit}
                                                onChange={handleChange}
                                                label="Priority"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={'HIGH'}>HIGH</MenuItem>
                                                <MenuItem value={'MEDIUM'}>MEDIUM</MenuItem>
                                                <MenuItem value={'LOW'}>LOW</MenuItem>
                                            </Select>
                                        </FormControl>
                                    ) : (
                                        <ListItemText primary="Priority" secondary={priority} data-testid="priority-text" />
                                    )
                            }
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Category" secondary={category} data-testid="category-text"  />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Created" secondary={moment(createdAt).format('MM/DD/YY h:mm:ss a')} data-testid="created-text" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Locations" secondary={getLocationNames(location)}  data-testid="locations-text" />
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions className="actions">
                    {
                        editMode && (
                            <Button className="actions__button" size="large" color='default' onClick={() => handleClick()} data-testid="cancel-button">
                                Cancel
                            </Button>
                        )
                    }
                    <Button className="actions__button" size="large" color={editMode ? 'secondary' : 'primary'} onClick={() => handleClick(true)} data-testid="edit-save-button">
                        {editMode ? 'Save' : 'Edit'}
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
};

export default WorkOrderDetails;