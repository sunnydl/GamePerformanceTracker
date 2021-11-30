import React from 'react';

import {
    Button,
    ButtonGroup,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

/**
 * Returns a functional component of the region drop down next to search bar for user to select region
 *
 * @returns {JSX.Element} The functional component.
 */
function RegionDropDown({
    options,
    selectedIndex,
    onSelect,
}: {
    options: string[];
    selectedIndex: number;
    onSelect: React.Dispatch<React.SetStateAction<number>>;
}) {
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number
    ) => {
        onSelect(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <ButtonGroup
                variant='contained'
                ref={anchorRef}
                aria-label='select region'
            >
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button
                    size='small'
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label='region button'
                    aria-haspopup='menu'
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom'
                                    ? 'center top'
                                    : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id='split-button-menu'>
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) =>
                                                handleMenuItemClick(
                                                    event,
                                                    index
                                                )
                                            }
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );
}

export default RegionDropDown;
