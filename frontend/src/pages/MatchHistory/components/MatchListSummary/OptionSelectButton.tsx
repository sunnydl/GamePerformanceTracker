import React, { useRef, useState } from 'react';
import {
    Button,
    ClickAwayListener,
    Grow,
    MenuList,
    MenuItem,
    Paper,
    Popper,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface OptionsSelectButtonProps {
    label: string;
    options: string[];
    selectedOptions: string | string[];
    onOptionsChange: Function;
    multiple?: boolean;
}

/**
 * Returns a functional component of the match history page that creates a
 * dropdown of a given amount of options.
 *
 * @param {string} label The label for the dropdown button.
 * @param {string[]} options The list of options for the dropdown.
 * @param {string | string[]} selectedOptions The option(s) selected by the user.
 * @param {Function} onOptionsChange A function that runs after an option is selected.
 * @param {boolean} [multiple] Determines whether the user can select multiple options.
 * @returns {JSX.Element} A functional component.
 */
export default function OptionSelectButton({
    label,
    options,
    selectedOptions,
    onOptionsChange,
    multiple,
}: OptionsSelectButtonProps) {
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);

    const handleMenuItemClick = (option: string) => {
        onOptionsChange(option);
        multiple || setOpen(false);
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
            <Button
                endIcon={<ArrowDropDownIcon />}
                ref={anchorRef}
                onClick={handleToggle}
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label='options button'
                aria-haspopup='menu'
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
                                placement === 'bottom'
                                    ? 'center top'
                                    : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id='split-button-menu'>
                                    {options.map((option) => (
                                        <MenuItem
                                            key={option}
                                            selected={
                                                multiple
                                                    ? selectedOptions.includes(
                                                          option
                                                      )
                                                    : option === selectedOptions
                                            }
                                            onClick={() =>
                                                handleMenuItemClick(option)
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
