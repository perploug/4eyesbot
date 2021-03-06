"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this list is compiled from the excellent Libraries.io project: https://github.com/librariesio/license-compatibility
// unfortunately is ruby-based so could not adopt it as a dependency. 
function FindCompatible(baselicense) {
    var group = Object.entries(LicenseTypes)
        .filter(function (x) { return x[1].indexOf(baselicense) >= 0; })[0][0];
    var allowed = [];
    allowed = allowed.concat(LicenseTypes.publicdomain)
        .concat(LicenseTypes.permissive);
    // find compatible groups
    if (group === "publicdomain") {
        return allowed;
    }
    if (group === "permissive" || group === "weakcopyleft") {
        return allowed
            .concat(LicenseTypes.weakcopyleft);
    }
    if (group === "strongcopyleft") {
        return allowed
            .concat(LicenseTypes.strongcopyleft)
            .concat(LicenseTypes.weakcopyleft);
    }
    if (group === "networkcopyleft") {
        return allowed
            .concat(LicenseTypes.strongcopyleft)
            .concat(LicenseTypes.weakcopyleft)
            .concat(LicenseTypes.networkcopyleft);
    }
    return allowed;
}
exports.FindCompatible = FindCompatible;
var LicenseTypes = {
    publicdomain: [
        "CC0-1.0",
        "PDDL-1.0",
        "SAX-PD",
        "Unlicense"
    ],
    permissive: [
        "AFL-1.1",
        "AFL-1.2",
        "AFL-2.0",
        "AFL-2.1",
        "AFL-3.0",
        "Apache-2.0",
        "Artistic-2.0",
        "BSD-2-Clause",
        "BSD-3-Clause",
        "BSD-3-Clause-Attribution",
        "BSD-3-Clause-Clear",
        "DSDP",
        "ECL-2.0",
        "ISC",
        "MIT",
        "WTFPL",
        "ZPL-2.1",
        "ZPL-1.0",
        "ZPL-2.0",
        "Python-2.0"
    ],
    weakcopyleft: [
        "EPL-1.0",
        "LGPL-2.0",
        "LGPL-2.1",
        "LGPL-3.0",
        "LGPL-3.0",
        "MPL-2.0",
        "MPL-1.0",
        "MPL-1.1",
        "LGPL-2.0+",
        "LGPL-2.1+",
        "LGPL-3.0+",
        "LGPL-2.0-only",
        "LGPL-2.1-only",
        "LGPL-3.0-only",
        "LGPL-3.0-only",
        "LGPL-2.0-or-later",
        "LGPL-2.1-or-later",
        "LGPL-3.0-or-later"
    ],
    strongcopyleft: [
        "GPL-3.0",
        "GPL-3.0-only",
        "GPL-2.0",
        "GPL-2.0-only",
        "GPL-1.0-only",
        "GPL-1.0-or-later",
        "GPL-2.0-or-later",
        "GPL-3.0-or-later",
        "MS-RL",
        "ODbL-1.0"
    ],
    networkcopyleft: [
        "AGPL-1.0",
        "AGPL-3.0",
        "RPL-1.1",
        "RPL-1.5",
        "OSL-1.0",
        "OSL-1.1",
        "OSL-2.0",
        "OSL-2.1",
        "OSL-3.0",
        "AGPL-1.0-only",
        "AGPL-1.0-or-later",
        "AGPL-3.0-only",
        "AGPL-3.0-or-later"
    ]
};
exports.LicenseTypes = LicenseTypes;
//# sourceMappingURL=licensetypes.js.map