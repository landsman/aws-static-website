import React from 'react';
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import NavbarBrand from "reactstrap/es/NavbarBrand"

class MainNavigation extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
            isHovered: false
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.handleHover = this.handleHover.bind(this);

        this.props = props;
        if(!this.props.hasOwnProperty('navActive')){
            this.props.navActive = false;
        }

        this.items = [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Page 2',
                link: '/page2'
            },
            {
                name: 'Google',
                link: 'https://google.com',
                external: true
            }
        ];
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        const items = this.items;
        const parentClasses = this.state.collapsed ? 'collapsed' : '';

        return (
            <div id={'stuffs'} className={"navigation-main"}>
                <Navbar color="faded" light={true} expand="md" className={"justify-content-md-center " + parentClasses}>
                    <NavbarBrand>
                        <Link to="/" style={{ textDecoration: `none` }}>
                            <img src="/amazon.svg" alt="logo" width={200} />
                        </Link>
                    </NavbarBrand>
                    <Collapse className={"justify-content-md-center"} isOpen={this.state.collapsed} navbar>
                        <Nav className={'active'} style={{marginLeft: 0}}>
                            {items.map(i =>
                                <NavItem
                                    key={i.link}
                                    className={typeof window !== 'undefined' && window.location.pathname === i.link ? 'nav-item active' : ''}
                                >
                                    {i.hasOwnProperty('external') && i.external &&
                                    <a href={i.link} target="_blank" className={"nav-link"}><span>{i.name}</span></a>
                                    }

                                    {!i.hasOwnProperty('external') &&
                                    <Link to={i.link} className={"nav-link"}><span>{i.name}</span></Link>
                                    }
                                </NavItem>
                            )}
                        </Nav>
                    </Collapse>
                    <NavbarToggler onClick={this.toggleNavbar} className={'mr-2 btn-block btn-lg'} />
                </Navbar>
            </div>
        );
    }
}

export default MainNavigation
