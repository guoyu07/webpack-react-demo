'use strict';
/**
 * 插入返回普通模块的代码
 * var component = require('./component.js');
 * document.body.appendChild(component());
 *
 */

import React from 'react';
import Hello from './component.jsx';
React.render(<Hello />,document.getElementById('app'));

