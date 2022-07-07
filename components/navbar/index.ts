/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// import type { TemplateResult } from 'lit';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import type { Ref } from 'lit/directives/ref.js';
// import { createRef, ref } from 'lit/directives/ref.js';

// import 'carbon-web-components/es/components/dropdown/dropdown.js';
// import 'carbon-web-components/es/components/dropdown/dropdown-item.js';
import '@carbon/ibmdotcom-web-components/es/components/masthead/masthead-container.js';

// import { closeIcon } from '../icons/close.js';
// import { menuIcon } from '../icons/menu.js';
import styles from './index.scss';
// import {
//   homeLink,
//   userAccountLink,
//   mainNavLinks,
//   socialMediaLinks,
// } from './links.js';
// import type { NavLink, DropdownNavItem } from './links.js';

@customElement('qiskit-navbar')
export class QiskitNavbar extends LitElement {
  static styles = [styles];

  /**
   * Whether to show the collapsible menu.
   */
  @property({ type: Boolean })
  showCollapsedMenu = false;

  protected render() {
    return html`<dds-masthead-container
      id="masthead-container"
    ></dds-masthead-container>`;
    // return html`<h1>Test</h1>`
    // return html`
    //   <nav class="navbar">
    //     <a href="${homeLink.url}">
    //       <div class="navbar__logo">${homeLink.icon}</div>
    //     </a>

    //     <button class="navbar__toggler" @click="${this._toggleCollapsedMenu}">
    //       <div class="navbar__toggler__icon">
    //         ${this.showCollapsedMenu ? closeIcon : menuIcon}
    //       </div>
    //     </button>

    //     <div class="navbar__menu ${this.showCollapsedMenu ? 'show' : null}">
    //       <ul class="navbar__nav">
    //         ${mainNavLinks.map(
    //           (navItem) => html`
    //             <li class="navbar__nav-item">
    //               ${'subItems' in navItem
    //                 ? this._navDropdownHTML(navItem)
    //                 : this._navLinkHTML(navItem)}
    //             </li>
    //           `
    //         )}
    //         <li class="navbar__menu__account">
    //           <a
    //             href="${userAccountLink.url}"
    //             class="navbar__menu__account__link"
    //           >
    //             ${userAccountLink.icon}
    //           </a>
    //         </li>
    //       </ul>
    //       <footer class="navbar__footer">
    //         <div class="navbar__footer__social-links">
    //           <h4 class="navbar__footer__social-links__title">
    //             Stay Connected
    //           </h4>
    //           <div class="navbar__footer__social-links__icons">
    //             ${socialMediaLinks.map(
    //               (link) =>
    //                 html`
    //                   <a
    //                     class="navbar__footer__social-links__icons__icon"
    //                     href="${link.url}"
    //                     rel="noopener"
    //                     target="_blank"
    //                     title="${link.label}"
    //                   >
    //                     ${link.icon}
    //                   </a>
    //                 `
    //             )}
    //           </div>
    //         </div>
    //         <div class="navbar__footer__notice">
    //           © Qiskit | All Rights Reserved
    //         </div>
    //       </footer>
    //     </div>
    //   </nav>
    // `;
  }

  /**
   * Closes a dropdown.
   */
  // private _closeDropdown(dropdownRef: Ref) {
  //   // TODO: Close the dropdown.
  //   console.log('TODO: Close the dropdown.', dropdownRef);
  // }

  /**
   * Handles the event when a dropdown item is selected.
   */
  // private _onDropdownBeingSelected(e: CustomEvent, dropdownRef: Ref) {
  //   e.preventDefault();
  //   this._closeDropdown(dropdownRef);
  // }

  /**
   * Toggle the collapsible menu.
   */
  // private _toggleCollapsedMenu() {
  //   this.showCollapsedMenu = !this.showCollapsedMenu;
  // }

  /**
   * Render a dropdown item.
   */
  // private _navItemDropdownSubItemTemplate(dropdownNavSubItem: NavLink) {
  //   return html`
  //     <a class="navbar__nav-subitem" href="${dropdownNavSubItem.url}">
  //       <bx-dropdown-item
  //         class="navbar__nav-dropdown-item"
  //         value="${dropdownNavSubItem.label}"
  //       >
  //         <span class="navbar__nav-dropdown-item-text">
  //           ${dropdownNavSubItem.label}
  //         </span>
  //       </bx-dropdown-item>
  //     </a>
  //   `;
  // }

  /**
   * Render a dropdown nav item.
   */
  // private _navDropdownHTML(dropdownNavItem: DropdownNavItem) {
  //   const dropdownRef = createRef();

  //   return html`
  //     <bx-dropdown
  //       ${ref(dropdownRef)}
  //       class="navbar__nav-dropdown"
  //       trigger-content="${dropdownNavItem.label}"
  //       @bx-dropdown-beingselected="${(e: CustomEvent) =>
  //         this._onDropdownBeingSelected(e, dropdownRef)}"
  //     >
  //       ${dropdownNavItem.subItems.map((item) =>
  //         this._navItemDropdownSubItemTemplate(item)
  //       )}
  //     </bx-dropdown>
  //   `;
  // }

  /**
   * Render a nav link.
   */
  // private _navLinkHTML(link: NavLink): TemplateResult {
  //   return html`
  //     <a class="navbar__nav-link" href="${link.url}">${link.label}</a>
  //   `;
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-navbar': QiskitNavbar;
  }
}
