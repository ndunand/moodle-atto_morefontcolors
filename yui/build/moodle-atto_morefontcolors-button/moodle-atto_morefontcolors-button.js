// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto text editor integration version file.
 *
 * @package    atto_morefontcolors
 * @copyright  2014 Université de Lausanne
 * @author     Nicolas Dunand <nicolas.dunand@unil.ch>
 * @author     Rossiani Wijaya  <rwijaya@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

YUI.add('moodle-atto_morefontcolors-button', function (Y, NAME) {

/**
 * @module moodle-atto_morefontcolors-button
 */

/**
 * Atto text editor morefontcolors plugin.
 *
 * @namespace M.atto_morefontcolors
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_morefontcolors').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
        var items = [];
        var colors = this.get('colors');
        Y.Array.each(colors, function(color) {
            items.push({
                text: '<div style="width: 20px; height: 20px; border: 1px solid #CCC; background-color: ' +
                        color +
                        '"></div>',
                callbackArgs: color,
                callback: this._changeStyle
            });
        });

        this.addToolbarMenu({
            icon: 'e/text_color',
            overlayWidth: '4',
            menuColor: '#333333',
            globalItemConfig: {
                callback: this._changeStyle
            },
            items: items
        });
    },

    /**
     * Change the font color to the specified color.
     *
     * @method _changeStyle
     * @param {EventFacade} e
     * @param {string} color The new font color
     * @private
     */
    _changeStyle: function(e, color) {
        this.get('host').formatSelectionInlineStyle({
            color: color
        });
    }
}, {
    ATTRS: {
        /**
         * The list of available colors
         *
         * @attribute colors
         * @type array
         * @default {}
         */
        colors: {
            value: {}
        }
    }
});


}, '@VERSION@');
