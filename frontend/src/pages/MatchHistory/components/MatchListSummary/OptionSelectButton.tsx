import React, { useRef, useState } from 'react';
import { Button, ClickAwayListener, Grow, MenuList, MenuItem, Paper, Popper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface OptionsSelectButtonProps {
    label: string,
    options: string[],
    selectedOptions: string | string[],
    onOptionsChange: Function,
    multiple?: boolean
}

function OptionSelectButton({ label, options, selectedOptions, onOptionsChange, multiple }: OptionsSelectButtonProps) {
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);
    
    const handleMenuItemClick = (option: string) => {
        onOptionsChange(option);
    };
    
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    
    const handleClose = (event: Event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                endIcon={<ArrowDropDownIcon />}
                ref={anchorRef}
                onClick={handleToggle}
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="options button"
                aria-haspopup="menu"
            >
                {label}
            </Button>
            <Popper 
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                        transformOrigin:
                            placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu">
                            {options.map((option) => (
                                <MenuItem
                                    key={option}
                                    selected={selectedOptions.includes(option)}
                                    onClick={() => handleMenuItemClick(option)}
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

export default OptionSelectButton;
