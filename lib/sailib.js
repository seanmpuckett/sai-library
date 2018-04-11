#!/usr/bin/env node

// Javascript source for sailib transpiled by SAI
//

"use strict";

var prototype=new function() {
  this.Constructor=function(){};
  this.__tobelocked=[];
  this.__tobefrozen=[];
  this.__contracts=[];
  this.__unverified=true;
  this.isof={};
  return this;
}();
var $AI=prototype;

// Generated code follows

var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sailib/src/sailib.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sailib/src","mtime":"2018-04-11T20:34:48.625Z","fetched":"2018-04-11T20:34:52.678Z"};
var __path=require('path');
var __require=function(fn) {
  try {
    return require(fn);
  } catch (e) {
    try {
      return require(__path.join(process.cwd(),fn));
    } catch (e) {
      return require(__path.join(process.cwd(),'node_modules',fn));
    }
  }
}
var $count$stepdown = function(v) {
  throw new Error("SAI Runtime: COUNT STEP value should be negative, not " + v);
};
var $count$stepup = function(v) {
  throw new Error("SAI Runtime: COUNT STEP value should be positive, not " + v);
};
var _FS = __require('fs');
var _GLOBAL = {
  instance: 0
};
var _COLLECTIONTYPE = {
  ctArray: 1,
  ctObject: 2,
  ctIterator: 3,
  ctScalar: 4,
  ctUndefined: 5
};
var isa = prototype.isa = 'SAILib';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['SAILib'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "canIterate", "mustIterate", "isObject", "isArray", "isString", "isMergable", "collectionType", "isCollection", "coverage", "assert", "debug_op", "iterator_op", "iterate_op", "kviterate_op", "collect_op", "drain_op", "sort_op", "enlist_op", "entrait_op", "alter_op", "observe_op", "audit_op", "concat_op", "map_op", "filter_op", "find_op", "sum_op", "reduce_op", "slice_op", "element_op", "clone_op", "overlay_op", "select_op", "asearch_op", "in_op", "update_op", "delete_op", "deepFreeze", "l_op", "xor_op", "min_op", "max_op", "compare_op", "keys_op", "count_op", "values_op", "newerror", "number_op", "expects_op", "expectsThrow", "finalizePrototype", "create_op_base", "singleton_op", "environment_base", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
var $1g = function() {
  var $ = this;
  return {
    debugFunction: console.log,
    _protocache: {},
    _singletoncache: {},
    _coveragecache: {},
    serial_number: undefined,
    create_op: undefined,
    environment: undefined
  };
}
for (var i in $1g()) {
  prototype[i] = undefined;
};
var $2g = prototype.Constructor || function() {};
prototype.Constructor = function() {
  $2g.call(this);
  var t = $1g();
  for (var i in t)
    if (t[i] !== undefined) this[i] = t[i];
};
var $3g = prototype['Instantiate'] || function() {};
prototype['Instantiate'] = function(p) {
  var $0_trial, $ = this['Instantiate'] ? this : $bindfail('Instantiate'),
    $_c, $_d; {
    if ($0_trial = ($.serial_number)) {
      $AI.debug_op('re-Instantiating over ' + $.serial_number);
    }
    _GLOBAL.instance = (_GLOBAL.instance || 0) + 1;
    $.serial_number = _GLOBAL.instance;
    $.create_op = function() {
      return ($.create_op_base).apply($, arguments);
    };
    $.environment = function() {
      return ($.environment_base).apply($, arguments);
    };
  }
};
var $4g = prototype['canIterate'] || function() {};
var _canIterate = prototype['canIterate'] = function(p) {
  var $1_this, $2_trial, $3_trial, $4_trial, $ = undefined,
    _i = p; {
    if (!(_i)) {
      return (false);
    }
    if ($2_trial = (_i[Symbol.iterator])) {
      return (true);
    }
    if ($3_trial = (('function' === typeof(_i)))) {
      return (true);
    }
    if ($4_trial = (('function' === typeof(_i.next)))) {
      return (true);
    }
    return (false);
  }
};
var $5g = prototype['mustIterate'] || function() {};
var _mustIterate = prototype['mustIterate'] = function(p) {
  var $5_this, $6_trial, $7_trial, $ = undefined,
    _i = p; {
    if (!(_i)) {
      return (false);
    }
    if ($6_trial = (('function' === typeof(_i.next)))) {
      return (true);
    }
    if ($7_trial = (('function' === typeof(_i)))) {
      return (true);
    }
    return (false);
  }
};
var $6g = prototype['isObject'] || function() {};
var _isObject = prototype['isObject'] = function(p) {
  var $10_trial, $8_this, $9_trial, $ = undefined,
    _i = p; {
    if ($9_trial = ((_i === null))) {
      return (false);
    }
    if ($10_trial = (('object' === typeof(_i)))) {
      return (true);
    }
    return (false);
  }
};
var $7g = prototype['isArray'] || function() {};
var _isArray = prototype['isArray'] = function(p) {
  var $11_this, $ = undefined,
    _i = p; {
    return (Array.isArray(_i));
  }
};
var $8g = prototype['isString'] || function() {};
var _isString = prototype['isString'] = function(p) {
  var $12_this, $ = undefined,
    _i = p; {
    return (('string' === typeof(_i)));
  }
};
var $9g = prototype['isMergable'] || function() {};
var _isMergable = prototype['isMergable'] = function(p) {
  var $13_this, $ = undefined,
    _i = p; {
    return ((_isArray(_i) || (_isObject(_i) || _canIterate(_i))));
  }
};
var $10g = prototype['collectionType'] || function() {};
var _collectionType = prototype['collectionType'] = function(p) {
  var $14_this, $15_trial, $16_trial, $17_trial, $18_this, $ = undefined,
    _a = p; {
    if ($15_trial = (_isArray(_a))) {
      return ('array');
    }
    if ($16_trial = (_canIterate(_a))) {
      return ('iterator');
    }
    if ($17_trial = (_isObject(_a))) {
      return ('object');
    }
    if (undefined !== ($18_this = (_a))) {
      return ('scalar');
    }
    return ('undefined');
  }
};
var $11g = prototype['isCollection'] || function() {};
var _isCollection = prototype['isCollection'] = function(p) {
  var $19_this, $ = undefined,
    _i = p; {
    return ((_isArray(_i) || _isObject(_i)));
  }
};
var $12g = prototype['coverage'] || function() {};
prototype['coverage'] = function(p, _description) {
  var $20_this, $21_this, $ = this['coverage'] ? this : $bindfail('coverage'),
    $_c, $_d, _test = p; {
    var $21_this = '' + _description + ' - ' + _test;
    if (!($._coveragecache[$21_this])) {
      $AI.debug_op('Covered ' + $21_this);
      $._coveragecache[$21_this] = true;
    };
  }
};
var $13g = prototype['assert'] || function() {};
var _assert = prototype['assert'] = function(p, _txt) {
  var $22_this, $ = undefined,
    _msg, _test = p; {
    if (!(_test)) {
      _msg = ('SAI: failed assertion ' + _txt);
      throw new Error(_msg);
    }
    return (_test);
  }
};
var $14g = prototype['debug_op'] || function() {};
prototype['debug_op'] = function(p) {
  var $23_this, $24_trial, $25_trial, $26_error, $ = this['debug_op'] ? this : $bindfail('debug_op'),
    $_c, $_d, _o = p; {
    try {
      if (undefined === _o) _o = 'undefined';
      if ($24_trial = (('function' === typeof(_o.next)))) {
        _o = '{possible iterator via .next}';
      } else if ($25_trial = (('function' === typeof(_o)))) {
        _o = '{function}';
      }
      $.debugFunction(_o);
    } catch ($26_error) {
      $.debugFunction('SAILib.debug exception: ' + $26_error.message);
      $.debugFunction(_o);
    }
  }
};
var $15g = prototype['iterator_op'] || function() {};
var _iterator_op = prototype['iterator_op'] = function(p) {
  var $27_this, $28_trial, $29_trial, $30_trial, $ = undefined,
    $_c, $_d, _i = p; {
    if (!(_i)) {
      return (_i);
    }
    if ($28_trial = (('function' === typeof(_i.next)))) {
      return (_i);
    }
    if ($29_trial = (('function' === typeof(_i)))) {
      return (_i());
    }
    if ($30_trial = (_i[Symbol.iterator])) {
      return (_i[Symbol.iterator]());
    }
    return (_i);
  }
};
var $16g = prototype['iterate_op'] || function() {};
var _iterate_op = prototype['iterate_op'] = function(p) {
  var $31_this, $32_trial, $33_trial, $34_trial, $35_this, $36_key, $37_list, $38_length, $39_none, $40_trial, $41_this, $42_key, $43_list, $44_none, $45_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($32_trial = ((undefined === _a))) {
      return (_a);
    }
    if ($33_trial = (_mustIterate(_a))) {
      return (_iterator_op(_a));
    }
    if ($34_trial = (_a[Symbol.iterator])) {
      return (_a[Symbol.iterator]());
    }
    if ($40_trial = (_isArray(_a))) {
      return (function*(p) {
        {
          var $37_list = _a,
            $36_key;
          if (undefined === $37_list) $37_list = [];
          var $38_length = $37_list.length;
          for ($36_key = 0; $36_key < $38_length; $36_key++) {
            $35_this = $37_list[$36_key];
            yield($35_this);;
          }
        }
      }());
    }
    if ($45_trial = (_isObject(_a))) {
      return (function*(p) {
        {
          var $43_list = _a,
            $42_key = undefined;
          if (undefined === $43_list) $43_list = {};
          for ($42_key in $43_list) {
            $41_this = $43_list[$42_key];
            yield([$42_key, $41_this]);;
          }
        }
      }());
    }
    return (function*(p) {
      {
        yield(_a);
      }
    }());
  }
};
var $17g = prototype['kviterate_op'] || function() {};
var _kviterate_op = prototype['kviterate_op'] = function(p) {
  var $46_this, $47_trial, $48_this, $49_key, $50_iter, $51_elem, $52_none, $53_trial, $54_this, $55_key, $56_iter, $57_elem, $58_none, $59_trial, $60_this, $61_key, $62_list, $63_length, $64_none, $65_trial, $66_this, $67_key, $68_list, $69_none, $70_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($47_trial = ((_a === undefined))) {
      return (function*(p) {
        {;
        }
      }());
    }
    if ($53_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $50_iter = $AI.iterator_op(_a);
          var $51_elem = $50_iter.next();
          if (!$51_elem.done)
            for (var $49_key = 0; !$51_elem.done; $51_elem = $50_iter.next()) {
              $48_this = $51_elem.value;
              yield([$49_key, $48_this]);;
              $49_key++;
            }
        }
      }());
    }
    if ($59_trial = (_a[Symbol.iterator])) {
      return (function*(p) {
        {
          var $56_iter = $AI.iterator_op(_a);
          var $57_elem = $56_iter.next();
          if (!$57_elem.done)
            for (var $55_key = 0; !$57_elem.done; $57_elem = $56_iter.next()) {
              $54_this = $57_elem.value;
              yield([$55_key, $54_this]);;
              $55_key++;
            }
        }
      }());
    }
    if ($65_trial = (_isArray(_a))) {
      return (function*(p) {
        {
          var $62_list = _a,
            $61_key;
          if (undefined === $62_list) $62_list = [];
          var $63_length = $62_list.length;
          for ($61_key = 0; $61_key < $63_length; $61_key++) {
            $60_this = $62_list[$61_key];
            yield([$61_key, $60_this]);;
          }
        }
      }());
    }
    if ($70_trial = (_isObject(_a))) {
      return (function*(p) {
        {
          var $68_list = _a,
            $67_key = undefined;
          if (undefined === $68_list) $68_list = {};
          for ($67_key in $68_list) {
            $66_this = $68_list[$67_key];
            yield([$67_key, $66_this]);;
          }
        }
      }());
    }
    return (function*(p) {
      {
        yield([0, _a]);
      }
    }());
  }
};
var $18g = prototype['collect_op'] || function() {};
var _collect_op = prototype['collect_op'] = function(p) {
  var $71_this, $72_trial, $73_this, $74_key, $75_iter, $76_elem, $77_none, $ = undefined,
    $_c, $_d, _a, _i = p; {
    if ($72_trial = ((undefined === _i))) {
      return (_i);
    }
    if (!(_mustIterate(_i))) {
      return (_i);
    }
    _a = [];
    var $75_iter = $AI.iterator_op(_i);
    var $76_elem = $75_iter.next();
    if (!$76_elem.done)
      for (var $74_key = 0; !$76_elem.done; $76_elem = $75_iter.next()) {
        $73_this = $76_elem.value;
        _a.push($73_this);;
        $74_key++;
      }
    return (_a);
  }
};
var $19g = prototype['drain_op'] || function() {};
var _drain_op = prototype['drain_op'] = function(p) {
  var $78_this, $79_trial, $80_this, $81_key, $82_iter, $83_elem, $84_none, $ = undefined,
    _i = p; {
    if ($79_trial = ((undefined === _i))) {
      return (_i);
    }
    if (!(_mustIterate(_i))) {
      return (_i);
    }
    var $82_iter = $AI.iterator_op(_i);
    var $83_elem = $82_iter.next();
    if (!$83_elem.done)
      for (var $81_key = 0; !$83_elem.done; $83_elem = $82_iter.next()) {
        $80_this = $83_elem.value;;;
        $81_key++;
      }
  }
};
var $20g = prototype['sort_op'] || function() {};
var _sort_op = prototype['sort_op'] = function(p, _fn) {
  var $85_this, $86_trial, $87_trial, $88_trial, $ = undefined,
    _a = p; {
    if ($86_trial = (_isArray(_a))) {
      return (_a.slice(0).sort(_fn));
    }
    if ($87_trial = (_mustIterate(_a))) {
      return (_collect_op(_a).sort(_fn));
    }
    if ($88_trial = (_isObject(_a))) {
      return (_values_op(_a).sort(_fn));
    }
    return (_a);
  }
};
var $21g = prototype['enlist_op'] || function() {};
var _enlist_op = prototype['enlist_op'] = function(p) {
  var $100_none, $101_trial, $102_trial, $89_this, $90_trial, $91_trial, $92_this, $93_key, $94_iter, $95_elem, $96_none, $97_this, $98_key, $99_list, $ = undefined,
    $_c, $_d, _a = p,
    _out; {
    if ($90_trial = ((undefined === _a))) {
      return (_a);;
    }
    if ($91_trial = (_isArray(_a))) {
      return (_a);;
    }
    _out = [];
    if ($101_trial = (_mustIterate(_a))) {
      var $94_iter = $AI.iterator_op(_a);
      var $95_elem = $94_iter.next();
      if (!$95_elem.done)
        for (var $93_key = 0; !$95_elem.done; $95_elem = $94_iter.next()) {
          $92_this = $95_elem.value;
          _out.push($92_this);;
          $93_key++;
        }
    } else if ($102_trial = (_isObject(_a))) {
      var $99_list = _a,
        $98_key = undefined;
      if (undefined === $99_list) $99_list = {};
      for ($98_key in $99_list) {
        $97_this = $99_list[$98_key];
        _out.push([$98_key, $97_this]);;
      }
    } else {
      _out.push(_a);
    }
    return (_out);
  }
};
var $22g = prototype['entrait_op'] || function() {};
var _entrait_op = prototype['entrait_op'] = function(p) {
  var $103_this, $104_trial, $105_trial, $106_this, $107_key, $108_iter, $109_elem, $110_none, $111_this, $112_key, $113_list, $114_length, $115_none, $116_trial, $117_trial, $118_trial, $ = undefined,
    $_c, $_d, _a = p,
    _assign, _k, _out, _v; {
    if ($104_trial = ((undefined === _a))) {
      return (_a);;
    }
    _out = [];
    _assign = function(p, _v) {
      var _k = p; {
        if ($105_trial = (((_k !== undefined) && (_v !== undefined)))) {
          _out[_k] = _v;
        }
      }
    };
    if ($116_trial = (_mustIterate(_a))) {
      var $108_iter = $AI.iterator_op(_a);
      var $109_elem = $108_iter.next();
      if (!$109_elem.done)
        for (var $107_key = 0; !$109_elem.done; $109_elem = $108_iter.next()) {
          $106_this = $109_elem.value;
          _assign($106_this[0], $106_this[1]);;
          $107_key++;
        }
    } else if ($117_trial = (_isArray(_a))) {
      var $113_list = _a,
        $112_key;
      if (undefined === $113_list) $113_list = [];
      var $114_length = $113_list.length;
      for ($112_key = 0; $112_key < $114_length; $112_key++) {
        $111_this = $113_list[$112_key];
        _assign($111_this[0], $111_this[1]);;
      }
    } else if ($118_trial = (_isObject(_a))) {
      return (_a);
    } else {
      _out[_a] = true;
    }
    return (_out);
  }
};
var $23g = prototype['alter_op'] || function() {};
var _alter_op = prototype['alter_op'] = function(p, _fn) {
  var $119_this, $ = undefined,
    _a = p; {
    return (_fn(_a));
  }
};
var $24g = prototype['observe_op'] || function() {};
var _observe_op = prototype['observe_op'] = function(p, _fn) {
  var $120_this, $ = undefined,
    $_c, $_d, _a = p; {
    _fn(_a);
    return (_a);
  }
};
var $25g = prototype['audit_op'] || function() {};
var _audit_op = prototype['audit_op'] = function(p, _fn) {
  var $121_this, $122_this, $123_key, $124_list, $125_length, $126_none, $127_this, $128_key, $129_iter, $130_elem, $131_none, $132_this, $133_key, $134_list, $135_none, $136_trial, $137_trial, $138_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($136_trial = (_isArray(_a))) {
      var $124_list = _a,
        $123_key;
      if (undefined === $124_list) $124_list = [];
      var $125_length = $124_list.length;
      for ($123_key = 0; $123_key < $125_length; $123_key++) {
        $122_this = $124_list[$123_key];
        _fn($122_this, $123_key);;
      }
    } else if ($137_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $129_iter = $AI.iterator_op(_a);
          var $130_elem = $129_iter.next();
          if (!$130_elem.done)
            for (var $128_key = 0; !$130_elem.done; $130_elem = $129_iter.next()) {
              $127_this = $130_elem.value;
              _fn($127_this, $128_key);
              yield($127_this);;
              $128_key++;
            }
        }
      }());
    } else if ($138_trial = (_isObject(_a))) {
      var $134_list = _a,
        $133_key = undefined;
      if (undefined === $134_list) $134_list = {};
      for ($133_key in $134_list) {
        $132_this = $134_list[$133_key];
        _fn($132_this, $133_key);;
      }
    }
    return (_a);
  }
};
var $26g = prototype['concat_op'] || function() {};
var _concat_op = prototype['concat_op'] = function(p, _b, _inplace) {
  var $139_this, $140_trial, $141_trial, $142_trial, $143_trial, $144_trial, $145_this, $146_key, $147_iter, $148_elem, $149_none, $150_this, $151_key, $152_iter, $153_elem, $154_none, $155_trial, $156_this, $157_key, $158_iter, $159_elem, $160_none, $161_this, $162_key, $163_list, $164_length, $165_none, $166_trial, $167_this, $168_key, $169_iter, $170_elem, $171_none, $172_trial, $173_trial, $174_this, $175_key, $176_iter, $177_elem, $178_none, $179_trial, $180_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($142_trial = ((undefined === _a))) {
      if ($140_trial = ((undefined === _b))) {
        return (undefined);;
      }
      if ($141_trial = ((_isArray(_b) || _mustIterate(_b)))) {
        return (_b);;
      }
      return ([_b]);
    }
    if ($144_trial = ((undefined === _b))) {
      if ($143_trial = ((_isArray(_a) || _mustIterate(_a)))) {
        return (_a);;
      }
      return ([_a]);
    }
    if ($172_trial = (_mustIterate(_a))) {
      if ($155_trial = (_mustIterate(_b))) {
        return (function*(p) {
          {
            var $147_iter = $AI.iterator_op(_a);
            var $148_elem = $147_iter.next();
            if (!$148_elem.done)
              for (var $146_key = 0; !$148_elem.done; $148_elem = $147_iter.next()) {
                $145_this = $148_elem.value;
                yield($145_this);;;
                $146_key++;
              }
            var $152_iter = $AI.iterator_op(_b);
            var $153_elem = $152_iter.next();
            if (!$153_elem.done)
              for (var $151_key = 0; !$153_elem.done; $153_elem = $152_iter.next()) {
                $150_this = $153_elem.value;
                yield($150_this);;;
                $151_key++;
              }
          }
        }());
      }
      if ($166_trial = (_isArray(_b))) {
        _b = $AI.clone_op(_b);
        return (function*(p) {
          {
            var $158_iter = $AI.iterator_op(_a);
            var $159_elem = $158_iter.next();
            if (!$159_elem.done)
              for (var $157_key = 0; !$159_elem.done; $159_elem = $158_iter.next()) {
                $156_this = $159_elem.value;
                yield($156_this);;;
                $157_key++;
              }
            var $163_list = _b,
              $162_key;
            if (undefined === $163_list) $163_list = [];
            var $164_length = $163_list.length;
            for ($162_key = 0; $162_key < $164_length; $162_key++) {
              $161_this = $163_list[$162_key];
              yield($161_this);;;
            }
          }
        }());
      }
      return (function*(p) {
        {
          var $169_iter = $AI.iterator_op(_a);
          var $170_elem = $169_iter.next();
          if (!$170_elem.done)
            for (var $168_key = 0; !$170_elem.done; $170_elem = $169_iter.next()) {
              $167_this = $170_elem.value;
              yield($167_this);;;
              $168_key++;
            }
          yield(_b);
        }
      }());
    }
    if ($173_trial = ((!(_isArray(_a))))) {
      _a = [_a];
    } else if (!(_inplace)) {
      _a = $AI.clone_op(_a);
    }
    if ($179_trial = (_mustIterate(_b))) {
      var $176_iter = $AI.iterator_op(_b);
      var $177_elem = $176_iter.next();
      if (!$177_elem.done)
        for (var $175_key = 0; !$177_elem.done; $177_elem = $176_iter.next()) {
          $174_this = $177_elem.value;
          _a.push($174_this);;;
          $175_key++;
        }
    } else if ($180_trial = (_isArray(_b))) {
      _a = _a.concat(_b);
    } else {
      _a.push(_b);
    }
    return (_a);
  }
};
var $27g = prototype['map_op'] || function() {};
var _map_op = prototype['map_op'] = function(p, _fn) {
  var $181_this, $182_trial, $183_this, $184_key, $185_list, $186_length, $187_none, $188_trial, $189_this, $190_key, $191_iter, $192_elem, $193_none, $194_trial, $195_this, $196_key, $197_list, $198_none, $199_trial, $ = undefined,
    $_c, $_d, _a = p,
    _r; {
    if ($182_trial = ((undefined === _a))) {
      return (_a);;
    }
    if ($188_trial = (_isArray(_a))) {
      _r = [];
      var $185_list = _a,
        $184_key;
      if (undefined === $185_list) $185_list = [];
      var $186_length = $185_list.length;
      for ($184_key = 0; $184_key < $186_length; $184_key++) {
        $183_this = $185_list[$184_key];
        _r[$184_key] = _fn($183_this, $184_key);;;
      }
      return (_r);
    }
    if ($194_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $191_iter = $AI.iterator_op(_a);
          var $192_elem = $191_iter.next();
          if (!$192_elem.done)
            for (var $190_key = 0; !$192_elem.done; $192_elem = $191_iter.next()) {
              $189_this = $192_elem.value;
              yield(_fn($189_this, $190_key));;;
              $190_key++;
            }
        }
      }());
    }
    if ($199_trial = (_isObject(_a))) {
      _r = {};
      var $197_list = _a,
        $196_key = undefined;
      if (undefined === $197_list) $197_list = {};
      for ($196_key in $197_list) {
        $195_this = $197_list[$196_key];
        _r[$196_key] = _fn($195_this, $196_key);;;
      }
      return (_r);
    }
    return (_fn(_a, undefined));
  }
};
var $28g = prototype['filter_op'] || function() {};
var _filter_op = prototype['filter_op'] = function(p, _fn) {
  var $200_this, $201_trial, $202_trial, $203_this, $204_key, $205_list, $206_length, $207_none, $208_trial, $209_trial, $210_this, $211_key, $212_iter, $213_elem, $214_none, $215_trial, $216_trial, $217_this, $218_key, $219_list, $220_none, $221_trial, $ = undefined,
    $_c, $_d, _a = p,
    _r; {
    if ($201_trial = ((undefined === _a))) {
      return (_a);;
    }
    if ($208_trial = (_isArray(_a))) {
      _r = [];
      var $205_list = _a,
        $204_key;
      if (undefined === $205_list) $205_list = [];
      var $206_length = $205_list.length;
      for ($204_key = 0; $204_key < $206_length; $204_key++) {
        $203_this = $205_list[$204_key];
        if ($202_trial = (_fn($203_this, $204_key))) {
          _r.push($203_this);;
        };;
      }
      return (_r);
    }
    if ($215_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $212_iter = $AI.iterator_op(_a);
          var $213_elem = $212_iter.next();
          if (!$213_elem.done)
            for (var $211_key = 0; !$213_elem.done; $213_elem = $212_iter.next()) {
              $210_this = $213_elem.value;
              if ($209_trial = (_fn($210_this, $211_key))) {
                yield($210_this);;
              };;
              $211_key++;
            }
        }
      }());
    }
    if ($221_trial = (_isObject(_a))) {
      _r = {};
      var $219_list = _a,
        $218_key = undefined;
      if (undefined === $219_list) $219_list = {};
      for ($218_key in $219_list) {
        $217_this = $219_list[$218_key];
        if ($216_trial = (_fn($217_this, $218_key))) {
          _r[$218_key] = $217_this;;
        };;
      }
      return (_r);
    }
    return (((_fn(_a, undefined)) ? (_a) : (undefined)));
  }
};
var $29g = prototype['find_op'] || function() {};
var _find_op = prototype['find_op'] = function(p, _fn, _last) {
  var $222_this, $223_trial, $224_trial, $225_this, $226_key, $227_list, $228_length, $229_none, $230_trial, $231_counter, $232_stop, $233_step, $234_none, $235_trial, $236_this, $237_key, $238_iter, $239_elem, $240_none, $241_trial, $242_this, $243_key, $244_iter, $245_elem, $246_none, $247_trial, $248_trial, $249_this, $250_key, $251_list, $252_none, $253_trial, $254, $ = undefined,
    _a = p,
    _ct, _found, _pick; {
    if ($223_trial = ((undefined === _a))) {
      return (_a);;
    }
    _ct = _collectionType(_a);
    switch ($254 = (_collectionType(_a))) {
      case 'array':
        if (!(_last)) {
          var $227_list = _a,
            $226_key;
          if (undefined === $227_list) $227_list = [];
          var $228_length = $227_list.length;
          for ($226_key = 0; $226_key < $228_length; $226_key++) {
            $225_this = $227_list[$226_key];
            if ($224_trial = (_fn($225_this, $226_key))) {
              return ($225_this);;
            };;
          }
        } else {
          var $232_stop = 0,
            $233_step = -1,
            $231_counter = _a.length + $233_step;
          if (!($233_step < 0)) $count$stepdown($233_step);
          for (; $231_counter >= $232_stop; $231_counter = $231_counter + $233_step) {
            if ($230_trial = (_fn(_a[$231_counter], $231_counter))) {
              return (_a[$231_counter]);;
            };
          }
        }
        break;
      case 'iterator':
        if (!(_last)) {
          var $238_iter = $AI.iterator_op(_a);
          var $239_elem = $238_iter.next();
          if (!$239_elem.done)
            for (var $237_key = 0; !$239_elem.done; $239_elem = $238_iter.next()) {
              $236_this = $239_elem.value;
              if ($235_trial = (_fn($236_this, $237_key))) {
                return ($236_this);;
              };;
              $237_key++;
            }
        } else {
          _found = false;
          _pick = undefined;
          var $244_iter = $AI.iterator_op(_a);
          var $245_elem = $244_iter.next();
          if (!$245_elem.done)
            for (var $243_key = 0; !$245_elem.done; $245_elem = $244_iter.next()) {
              $242_this = $245_elem.value;
              if ($241_trial = (_fn($242_this, $243_key))) {
                _found = true;
                _pick = $242_this;
              };;
              $243_key++;
            }
          if ($247_trial = (_found)) {
            return (_pick);
          }
        }
        break;
      case 'object':
        var $251_list = _a,
          $250_key = undefined;
        if (undefined === $251_list) $251_list = {};
        for ($250_key in $251_list) {
          $249_this = $251_list[$250_key];
          if ($248_trial = (_fn($249_this, $250_key))) {
            return ($249_this);;
          };;
        }
        break;
      case 'scalar':
        if ($253_trial = (_fn(_a, 0))) {
          return (_a);;
        }
        break;
      default:
        throw new Error('SAI Runtime: unexpected collection type in find_op: ' + $254);
        break;
    }
    return (undefined);
  }
};
var $30g = prototype['sum_op'] || function() {};
var _sum_op = prototype['sum_op'] = function(p, _fn, _accum) {
  var $255_this, $256_trial, $257_this, $258_trial, $259, $260_trial, $261_this, $262_key, $263_list, $264_none, $265_trial, $ = undefined,
    $_c, $_d, _a = p,
    _k, _l, _step; {
    if ($256_trial = ((undefined === _a))) {
      return (_a);;
    }
    if ($258_trial = (_isArray(_a))) {
      _l = _a.length;
      if (!(_l)) {
        return (_accum);;
      }
      _k = 0;
      var $257_this;
      while ($257_this = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        _k = (_k || 0) + 1;
      }
      return (_accum);
    }
    if ($260_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          $259 = _a;
          _a = $AI.iterate_op($259);
          _step = _a.next();
          _k = 0;
          while (!(_step.done)) {
            _accum = _fn(_accum, _step.value, _k);
            _step = _a.next();
            _k = (_k || 0) + 1;
          }
          yield(_accum);
        }
      }());
    }
    if ($265_trial = (_isObject(_a))) {
      var $263_list = _a,
        $262_key = undefined;
      if (undefined === $263_list) $263_list = {};
      for ($262_key in $263_list) {
        $261_this = $263_list[$262_key];
        _accum = _fn(_accum, $261_this, $262_key);;
      }
      return (_accum);
    }
    return (_sum_op([_a], _fn, _accum));
  }
};
var $31g = prototype['reduce_op'] || function() {};
var _reduce_op = prototype['reduce_op'] = function(p, _fn) {
  var $266_this, $267_trial, $268_this, $269_trial, $270, $271_trial, $272_trial, $273_trial, $274_this, $275_key, $276_list, $277_none, $278_trial, $ = undefined,
    $_c, $_d, _a = p,
    _accum, _init, _k, _l, _step; {
    if ($267_trial = ((undefined === _a))) {
      return (_a);;
    }
    if ($269_trial = (_isArray(_a))) {
      _l = _a.length;
      if (!(_l)) {
        return (undefined);;
      }
      _accum = $AI.clone_op(_a[0]);
      _k = 1;
      var $268_this;
      while ($268_this = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        _k = (_k || 0) + 1;
      }
      return (_accum);
    }
    if ($272_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          $270 = _a;
          _a = $AI.iterate_op($270);
          _step = _a.next();
          if ($271_trial = (_step.done)) {
            return (undefined);
          }
          _accum = $AI.clone_op(_step.value);
          _k = 1;
          _step = _a.next();
          while (!(_step.done)) {
            _accum = _fn(_accum, _step.value, _k);
            _step = _a.next();
            _k = (_k || 0) + 1;
          }
          yield(_accum);
        }
      }());
    }
    if ($278_trial = (_isObject(_a))) {
      _init = true;
      var $276_list = _a,
        $275_key = undefined;
      if (undefined === $276_list) $276_list = {};
      for ($275_key in $276_list) {
        $274_this = $276_list[$275_key];
        if ($273_trial = (_init)) {
          _accum = $AI.clone_op($274_this);
          _init = false;
        } else {
          _accum = _fn(_accum, $274_this, $275_key);
        };
      }
      return (_accum);
    }
    return (_reduce_op([_a], _fn));
  }
};
var $32g = prototype['slice_op'] || function() {};
var _slice_op = prototype['slice_op'] = function(p, _st, _ct) {
  var $279_this, $280_trial, $281_trial, $282_trial, $283_trial, $284_trial, $285_trial, $286_trial, $287_trial, $288_trial, $289_trial, $290_trial, $291_trial, $292_trial, $293_trial, $294_trial, $295_trial, $296_trial, $297_trial, $298_this, $299_key, $300_iter, $301_elem, $302_none, $303_trial, $304_trial, $305_trial, $306_trial, $307_trial, $308_trial, $309_trial, $310_trial, $311_trial, $312_trial, $313_trial, $314_trial, $315_trial, $316_trial, $317_trial, $318_trial, $319_trial, $320_trial, $321, $322_trial, $323_trial, $324_this, $325_trial, $326_this, $ = undefined,
    $_c, $_d, _a = p,
    _cache, _crop, _keep, _len, _only, _size, _skip, _v; {
    if ($280_trial = ((undefined === _a))) {
      return (_a);;
    }
    if ($292_trial = (_isString(_a))) {
      if ($281_trial = ((_ct === 0))) {
        return ('');
      }
      if ($282_trial = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
        return (_a);
      }
      if ($283_trial = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
        return (_a.substring(0, _ct));
      }
      _len = _a.length;
      if ($288_trial = (((undefined === _st) && (_ct < 0)))) {
        return (_a.substring((_len + _ct), _len));
      } else if ($289_trial = (((0 === _st) && (_ct < 0)))) {
        return (_a.substring(0, (_len + _ct)));
      } else if ($290_trial = ((_st > 0))) {
        if ($284_trial = ((_ct < 0))) {
          return (_a.substring(_st, (_len + _ct)));
        } else if ($285_trial = ((_ct > 0))) {
          return (_a.substring(_st, (_st + _ct)));
        } else {
          return (_a.substring(_st, _len));
        }
      } else if ($291_trial = ((_st < 0))) {
        if ($286_trial = ((_ct < 0))) {
          return (_a.substring((_len + _st), (_len + _ct)));
        } else if ($287_trial = ((_ct > 0))) {
          return (_a.substring((_len + _st), (_len + (_st + _ct))));
        } else {
          return (_a.substring((_len + _st), _len));
        }
      }
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
    }
    if ($294_trial = ((_ct === 0))) {
      if ($293_trial = (_mustIterate(_a))) {
        return (function*(p) {
          {;;
          }
        });
      } else {
        return ([]);
      }
    }
    if (!((_mustIterate(_a) || _isArray(_a)))) {
      _a = [_a];
    }
    if ($296_trial = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
      if ($295_trial = (_isArray(_a))) {
        return ($AI.clone_op(_a));
      } else {
        return (_a);
      }
    }
    if ($304_trial = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
      if ($303_trial = (_isArray(_a))) {
        return (_a.slice(0, _ct));
      } else {
        return (function*(p) {
          {
            var $300_iter = $AI.iterator_op(_a);
            var $301_elem = $300_iter.next();
            if (!$301_elem.done)
              for (var $299_key = 0; !$301_elem.done; $301_elem = $300_iter.next()) {
                $298_this = $301_elem.value;
                if ($297_trial = (($299_key < _ct))) {
                  yield($298_this);;
                } else {
                  break;;
                };
                $299_key++;
              }
          }
        }());
      }
    }
    if ($313_trial = (_isArray(_a))) {
      _len = _a.length;
      if ($309_trial = (((undefined === _st) && (_ct < 0)))) {
        return (_a.slice((_len + _ct), _len));
      } else if ($310_trial = (((0 === _st) && (_ct < 0)))) {
        return (_a.slice(0, (_len + _ct)));
      } else if ($311_trial = ((_st > 0))) {
        if ($305_trial = ((_ct < 0))) {
          return (_a.slice(_st, (_len + _ct)));
        } else if ($306_trial = ((_ct > 0))) {
          return (_a.slice(_st, (_st + _ct)));
        } else {
          return (_a.slice(_st, _len));
        }
      } else if ($312_trial = ((_st < 0))) {
        if ($307_trial = ((_ct < 0))) {
          return (_a.slice((_len + _st), (_len + _ct)));
        } else if ($308_trial = ((_ct > 0))) {
          return (_a.slice((_len + _st), (_len + (_st + _ct))));
        } else {
          return (_a.slice((_len + _st), _len));
        }
      }
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
    }
    _skip = 0;
    _crop = 0;
    _size = 0;
    _only = undefined;
    _keep = true;
    if ($318_trial = (((undefined === _st) && (_ct < 0)))) {
      _keep = false;
      _size = (0 - (_ct));
    } else if ($319_trial = ((_st < 0))) {
      _keep = false;
      _size = (0 - (_st));
      if ($314_trial = ((_ct < 0))) {
        _crop = (0 - (_ct));
      } else if ($315_trial = ((_ct > 0))) {
        _crop = (_size - _ct);
      }
    } else if ($320_trial = ((_st > 0))) {
      _skip = _st;
      if ($316_trial = ((_ct < 0))) {
        _size = (0 - (_ct));
        _crop = (0 - (_ct));
      } else if ($317_trial = ((_ct > 0))) {
        _only = _ct;
      }
    } else {
      _size = (0 - (_ct));
      _crop = (0 - (_ct));
    }
    $321 = _a;
    _a = $AI.iterate_op($321);
    return (function*(p) {
      {
        _cache = [];
        _v = _a.next();
        while (!(((_skip <= 0) || _v.done))) {
          _skip--;
          _v = _a.next();
        }
        while (!(_v.done)) {
          _cache.push(_v.value);
          if ($325_trial = ((_cache.length > _size))) {
            var $324_this = _cache.shift();
            if ($323_trial = (_keep)) {
              if ($322_trial = ((_only <= 0))) {
                return;;
              }
              _only--;
              yield($324_this);
            };
          }
          _v = _a.next();
        }
        var $326_this;
        while ($326_this = ((_cache.length > _crop))) {
          yield(_cache.shift());
        }
      }
    }());
  }
};
var $33g = prototype['element_op'] || function() {};
var _element_op = prototype['element_op'] = function(p, _index) {
  var $327_this, $328_trial, $329_trial, $330_trial, $331_trial, $ = undefined,
    _a = p; {
    if ($328_trial = ((undefined === _a))) {
      return (_a);;
    }
    if ($329_trial = (_isArray(_a))) {
      return (_a[_index]);
    }
    if ($330_trial = (_mustIterate(_a))) {
      return (_slice_op(_a, _index, 1).next().value);
    }
    if ($331_trial = (((_index === 0) || (_index === (0 - (1)))))) {
      return (_a);
    }
    return (undefined);
  }
};
var $34g = prototype['clone_op'] || function() {};
var _clone_op = prototype['clone_op'] = function(p) {
  var $332_this, $333_trial, $334_this, $335_key, $336_list, $337_none, $338_trial, $ = undefined,
    _a = p,
    _b; {
    if ($333_trial = (_isArray(_a))) {
      return (_a.slice(0));
    }
    if ($338_trial = (_isObject(_a))) {
      _b = {};
      var $336_list = _a,
        $335_key = undefined;
      if (undefined === $336_list) $336_list = {};
      for ($335_key in $336_list) {
        $334_this = $336_list[$335_key];
        _b[$335_key] = $334_this;;
      }
      return (_b);
    }
    return (_a);
  }
};
var $35g = prototype['overlay_op'] || function() {};
var _overlay_op = prototype['overlay_op'] = function(p, _r) {
  var $339_this, $340_trial, $341_trial, $342_trial, $343_this, $344_key, $345_iter, $346_elem, $347_none, $348_this, $349_this, $350_key, $351_iter, $352_elem, $353_none, $354_trial, $355_trial, $356_trial, $357_this, $358_key, $359_list, $360_none, $361_trial, $362_this, $363_key, $364_list, $365_length, $366_none, $367_trial, $368, $369, $370_trial, $ = undefined,
    $_b, $_c, $_d, _i, _l = p,
    _v, _vl, _vr; {
    if ($340_trial = ((undefined === _l))) {
      _l = {};
    }
    if ($341_trial = ((!(_isMergable(_l))))) {
      throw new Error('SAI: Attempt to OVERLAY onto something that\'s not a collection/iterable.');
    }
    if ($342_trial = ((!(_isMergable(_r))))) {
      throw new Error('SAI: Attempt to OVERLAY with something that\'s not a collection/iterable.');
    }
    if (!(_mustIterate(_l))) {
      _l = $AI.clone_op(_l);
      if ($355_trial = (_mustIterate(_r))) {
        if ($354_trial = (_isArray(_l))) {
          return (function*(p) {
            {
              var $345_iter = $AI.iterator_op(_r);
              var $346_elem = $345_iter.next();
              if (!$346_elem.done)
                for (var $344_key = 0; !$346_elem.done; $346_elem = $345_iter.next()) {
                  $343_this = $346_elem.value;
                  yield(((undefined !== ($_b = $343_this)) ? $_b : _l[$344_key]));;
                  $344_key++;
                }
            }
          }());
        } else {
          var $351_iter = $AI.iterator_op(_r);
          var $352_elem = $351_iter.next();
          if (!$352_elem.done)
            for (var $350_key = 0; !$352_elem.done; $352_elem = $351_iter.next()) {
              $349_this = $352_elem.value;
              if (undefined !== ($348_this = ($349_this))) {
                _l[$350_key] = $348_this;
              };
              $350_key++;
            }
          return (_l);
        }
      }
      if ($367_trial = (_isObject(_r))) {
        var $359_list = _r,
          $358_key = undefined;
        if (undefined === $359_list) $359_list = {};
        for ($358_key in $359_list) {
          $357_this = $359_list[$358_key];
          if ($356_trial = (($357_this !== undefined))) {
            _l[$358_key] = $357_this;
          };
        }
      } else {
        var $364_list = _r,
          $363_key;
        if (undefined === $364_list) $364_list = [];
        var $365_length = $364_list.length;
        for ($363_key = 0; $363_key < $365_length; $363_key++) {
          $362_this = $364_list[$363_key];
          if ($361_trial = (($362_this !== undefined))) {
            _l[$363_key] = $362_this;
          };
        }
      }
      return (_l);
    }
    $368 = _l;
    _l = $AI.iterate_op($368);
    if ($370_trial = (_mustIterate(_r))) {
      $369 = _r;
      _r = $AI.iterate_op($369);
      return (function*(p) {
        {
          _vl = _l.next();
          _vr = _r.next();
          while (!(_vr.done)) {
            yield((((_vr.value === undefined)) ? (_vl.value) : (_vr.value)));
            _vl = _l.next();
            _vr = _r.next();
          }
          yield*(_l);
        }
      }());
    }
    _r = $AI.clone_op(_r);
    return (function*(p) {
      {
        _i = 0;
        _v = _l.next();
        while (!(_v.done)) {
          yield((((_r[_i] === undefined)) ? (_v.value) : (_r[_i])));
          _i = (_i || 0) + 1;
          _v = _l.next();
        }
      }
    }());
  }
};
var $36g = prototype['select_op'] || function() {};
var _select_op = prototype['select_op'] = function(p, _manifest) {
  var $371_this, $372_trial, $373_this, $374_key, $375_list, $376_length, $377_none, $378_this, $379_key, $380_iter, $381_elem, $382_none, $383_trial, $384_trial, $385_this, $386_key, $387_list, $388_none, $389, $390_this, $391_this, $392_key, $393_iter, $394_elem, $395_none, $396_trial, $397, $398_this, $399_this, $400_key, $401_list, $402_length, $403_none, $404_trial, $405_this, $406_key, $407_trial, $408_trial, $409_this, $410_key, $411_iter, $412_elem, $413_none, $414_trial, $415_trial, $416_trial, $417_this, $418_key, $419_iter, $420_elem, $421_none, $422_trial, $423_this, $424_key, $425_list, $426_length, $427_none, $428_trial, $429_this, $430_key, $431_list, $432_none, $433_trial, $ = undefined,
    $_c, $_d, _buffer, _i, _l, _result, _src = p; {
    if (!(_isMergable(_src))) {
      throw new Error('SAI: Left argument to SELECT must be list/traits/iterable.');
    }
    if (!(_isMergable(_manifest))) {
      if ($372_trial = ((undefined === _manifest))) {
        return (_manifest);;
      }
      _manifest = [_manifest];
    }
    if ($414_trial = (_isArray(_src))) {
      if ($383_trial = (_isArray(_manifest))) {
        _result = [];
        var $375_list = _manifest,
          $374_key;
        if (undefined === $375_list) $375_list = [];
        var $376_length = $375_list.length;
        for ($374_key = 0; $374_key < $376_length; $374_key++) {
          $373_this = $375_list[$374_key];
          _result.push(_src[$373_this]);;
        }
        return (_result);
      } else if ($384_trial = (_mustIterate(_manifest))) {
        _src = $AI.clone_op(_src);
        return (function*(p) {
          {
            var $380_iter = $AI.iterator_op(_manifest);
            var $381_elem = $380_iter.next();
            if (!$381_elem.done)
              for (var $379_key = 0; !$381_elem.done; $381_elem = $380_iter.next()) {
                $378_this = $381_elem.value;
                yield(_src[$378_this]);;
                $379_key++;
              }
          }
        }());
      }
      _result = [];
      var $387_list = _manifest,
        $386_key = undefined;
      if (undefined === $387_list) $387_list = {};
      for ($386_key in $387_list) {
        $385_this = $387_list[$386_key];
        _result.push(_src[$386_key]);;
      }
      return (_result);
    } else if ($415_trial = (_mustIterate(_src))) {
      if ($396_trial = (_mustIterate(_manifest))) {
        $389 = _src;
        _src = $AI.iterate_op($389);
        return (function*(p) {
          {
            _l = _src.next();
            _buffer = [];
            var $393_iter = $AI.iterator_op(_manifest);
            var $394_elem = $393_iter.next();
            if (!$394_elem.done)
              for (var $392_key = 0; !$394_elem.done; $394_elem = $393_iter.next()) {
                $391_this = $394_elem.value;
                var $390_this;
                while ($390_this = (((!(_l.done)) && (_buffer.length <= $391_this)))) {
                  _buffer.push(_l.value);
                  _l = _src.next();
                }
                yield(_buffer[$391_this]);;
                $392_key++;
              }
          }
        }());
      }
      if ($404_trial = (_isArray(_manifest))) {
        _manifest = $AI.clone_op(_manifest);
        $397 = _src;
        _src = $AI.iterate_op($397);
        return (function*(p) {
          {
            _l = _src.next();
            _buffer = [];
            var $401_list = _manifest,
              $400_key;
            if (undefined === $401_list) $401_list = [];
            var $402_length = $401_list.length;
            for ($400_key = 0; $400_key < $402_length; $400_key++) {
              $399_this = $401_list[$400_key];
              var $398_this;
              while ($398_this = (((!(_l.done)) && (_buffer.length <= $399_this)))) {
                _buffer.push(_l.value);
                _l = _src.next();
              }
              yield(_buffer[$399_this]);;
            }
          }
        }());
      }
      _manifest = $AI.sort_op($AI.map_op($AI.keys_op(_manifest), function($405_this, $406_key) {
        return ($AI.number_op($405_this));
      }), function(a, b) {
        var aa, bb;
        aa = a;
        bb = b;
        if (aa < bb) return -1;
        if (aa > bb) return 1;;
        return 0;
      });
      return (function*(p) {
        {
          _i = 0;
          var $411_iter = $AI.iterator_op(_src);
          var $412_elem = $411_iter.next();
          if (!$412_elem.done)
            for (var $410_key = 0; !$412_elem.done; $412_elem = $411_iter.next()) {
              $409_this = $412_elem.value;
              if ($408_trial = (($410_key === _manifest[_i]))) {
                yield($409_this);
                _i = (_i || 0) + 1;
                if ($407_trial = ((_i >= _manifest.length))) {
                  return;;
                }
              };
              $410_key++;
            }
        }
      }());
    }
    if ($422_trial = (_mustIterate(_manifest))) {
      _src = $AI.clone_op(_src);
      return (function*(p) {
        {
          var $419_iter = $AI.iterator_op(_manifest);
          var $420_elem = $419_iter.next();
          if (!$420_elem.done)
            for (var $418_key = 0; !$420_elem.done; $420_elem = $419_iter.next()) {
              $417_this = $420_elem.value;
              if ($416_trial = (($417_this !== undefined))) {
                yield(_src[$417_this]);
              };
              $418_key++;
            }
        }
      }());
    }
    _result = {};
    if ($428_trial = (_isArray(_manifest))) {
      var $425_list = _manifest,
        $424_key;
      if (undefined === $425_list) $425_list = [];
      var $426_length = $425_list.length;
      for ($424_key = 0; $424_key < $426_length; $424_key++) {
        $423_this = $425_list[$424_key];
        _result[$423_this] = _src[$423_this];;
      }
      return (_result);
    }
    if ($433_trial = (_isObject(_manifest))) {
      var $431_list = _manifest,
        $430_key = undefined;
      if (undefined === $431_list) $431_list = {};
      for ($430_key in $431_list) {
        $429_this = $431_list[$430_key];
        _result[$430_key] = _src[$430_key];;
      }
    } else {
      _result[_manifest] = _src[_manifest];
    }
    return (_result);
  }
};
var $37g = prototype['asearch_op'] || function() {};
prototype['asearch_op'] = function(p, _e) {
  var $434_this, $435_trial, $436_counter, $437_stop, $438_step, $439_none, $ = this['asearch_op'] ? this : $bindfail('asearch_op'),
    _a = p; {
    var $436_counter = 0,
      $437_stop = _a.length,
      $438_step = 1;
    if (!($438_step > 0)) $count$stepup($438_step);
    for (; $436_counter < $437_stop; $436_counter = $436_counter + $438_step) {
      if ($435_trial = ((_a[$436_counter] === _e))) {
        return ($436_counter);
      };
    }
    return (undefined);
  }
};
var $38g = prototype['in_op'] || function() {};
prototype['in_op'] = function(p, _query, _type) {
  var $440_this, $441_trial, $442, $443, $444_trial, $445_this, $446_key, $447_list, $448_length, $449_none, $450_trial, $451_this, $452_key, $453_iter, $454_elem, $455_none, $456_trial, $457_this, $458_list, $459_none, $460_trial, $461, $462_this, $463_key, $464_list, $465_length, $466_none, $467_this, $468_key, $469_iter, $470_elem, $471_none, $472_this, $473_list, $474_none, $475_this, $476, $477, $ = this['in_op'] ? this : $bindfail('in_op'),
    $_c, $_d, _k, _pool = p,
    _v; {
    if (!(((undefined !== _pool) && (undefined !== _query)))) {
      return (undefined);
    }
    switch ($443 = (_collectionType(_query))) {
      case 'array':
        if ($441_trial = ((_type === 'and'))) {
          _query = $AI.clone_op(_query);
        }
        break;
      case 'iterator':
        $442 = _query;
        _query = $AI.collect_op($442);
        break;
      default:
        _query = [_query];
        break;
    }
    switch ($477 = (_type)) {
      case 'and':
        switch ($461 = (_collectionType(_pool))) {
          case 'array':
            var $447_list = _pool,
              $446_key;
            if (undefined === $447_list) $447_list = [];
            var $448_length = $447_list.length;
            for ($446_key = 0; $446_key < $448_length; $446_key++) {
              _v = $447_list[$446_key];
              if (undefined !== ($445_this = ($.asearch_op(_query, _v)))) {
                if ($444_trial = ((_query.length === 1))) {
                  return (true);
                }
                _query.splice($445_this, 1);
              };
            }
            break;
          case 'iterator':
            var $453_iter = $AI.iterator_op(_pool);
            var $454_elem = $453_iter.next();
            if (!$454_elem.done)
              for (var $452_key = 0; !$454_elem.done; $454_elem = $453_iter.next()) {
                _v = $454_elem.value;
                if (undefined !== ($451_this = ($.asearch_op(_query, _v)))) {
                  if ($450_trial = ((_query.length === 1))) {
                    return (true);
                  }
                  _query.splice($451_this, 1);
                };
                $452_key++;
              }
            break;
          case 'object':
            var $458_list = _pool,
              _k = undefined;
            if (undefined === $458_list) $458_list = {};
            for (_k in $458_list) {
              _v = $458_list[_k];
              if (undefined !== ($457_this = ($.asearch_op(_query, _k)))) {
                if ($456_trial = ((_query.length === 1))) {
                  return (true);
                }
                _query.splice($457_this, 1);
              };
            }
            break;
          case 'scalar':
            if ($460_trial = (((_query.length === 1) && (_pool === _query[0])))) {
              return (true);
            }
            break;
          default:
            throw new Error('SAI Runtime: in_op got an unexpected collection type: ' + $461);
            break;
        }
        break;
      case 'or':
        switch ($476 = (_collectionType(_pool))) {
          case 'array':
            var $464_list = _pool,
              $463_key;
            if (undefined === $464_list) $464_list = [];
            var $465_length = $464_list.length;
            for ($463_key = 0; $463_key < $465_length; $463_key++) {
              _v = $464_list[$463_key];
              if (undefined !== ($462_this = ($.asearch_op(_query, _v)))) {
                return (_v);
              };
            }
            break;
          case 'iterator':
            var $469_iter = $AI.iterator_op(_pool);
            var $470_elem = $469_iter.next();
            if (!$470_elem.done)
              for (var $468_key = 0; !$470_elem.done; $470_elem = $469_iter.next()) {
                _v = $470_elem.value;
                if (undefined !== ($467_this = ($.asearch_op(_query, _v)))) {
                  return (_v);
                };
                $468_key++;
              }
            break;
          case 'object':
            var $473_list = _pool,
              _k = undefined;
            if (undefined === $473_list) $473_list = {};
            for (_k in $473_list) {
              _v = $473_list[_k];
              if (undefined !== ($472_this = ($.asearch_op(_query, _k)))) {
                return (_k);
              };
            }
            break;
          case 'scalar':
            if (undefined !== ($475_this = ($.asearch_op(_query, _pool)))) {
              return (_query);
            }
            break;
          default:
            throw new Error('SAI Runtime: in_op got an unexpected collection type: ' + $476);
            break;
        }
        break;
      default:
        throw new Error('SAI Runtime: in_op got an illegal operation type: ' + _type);
        break;
    }
    return (undefined);
  }
};
var $39g = prototype['update_op'] || function() {};
var _update_op = prototype['update_op'] = function(p, _manifest) {
  var $478_this, $479_trial, $480_trial, $481_this, $482_key, $483_iter, $484_elem, $485_none, $486_trial, $487_this, $488_key, $489_list, $490_length, $491_none, $492_trial, $493_this, $494_key, $495_list, $496_none, $497_trial, $498_trial, $ = undefined,
    _dest = p; {
    if ($479_trial = ((undefined === _dest))) {
      _dest = {};
    }
    if (!((_isArray(_dest) || _isObject(_dest)))) {
      throw new Error('Attempt to UPDATE into something that\'s not a list or traits.');
    }
    if (!(_isMergable(_manifest))) {
      throw new Error('Attempt to UPDATE from something that\'s not a list or traits.');
    }
    if ($497_trial = (_mustIterate(_manifest))) {
      var $483_iter = $AI.iterator_op(_manifest);
      var $484_elem = $483_iter.next();
      if (!$484_elem.done)
        for (var $482_key = 0; !$484_elem.done; $484_elem = $483_iter.next()) {
          $481_this = $484_elem.value;
          if ($480_trial = (($481_this !== undefined))) {
            _dest[$482_key] = $481_this;;
          };
          $482_key++;
        }
    } else if ($498_trial = (_isArray(_manifest))) {
      var $489_list = _manifest,
        $488_key;
      if (undefined === $489_list) $489_list = [];
      var $490_length = $489_list.length;
      for ($488_key = 0; $488_key < $490_length; $488_key++) {
        $487_this = $489_list[$488_key];
        if ($486_trial = (($487_this !== undefined))) {
          _dest[$488_key] = $487_this;;
        };
      }
    } else {
      var $495_list = _manifest,
        $494_key = undefined;
      if (undefined === $495_list) $495_list = {};
      for ($494_key in $495_list) {
        $493_this = $495_list[$494_key];
        if ($492_trial = (($493_this !== undefined))) {
          _dest[$494_key] = $493_this;;
        };
      }
    }
    return (_dest);
  }
};
var $40g = prototype['delete_op'] || function() {};
var _delete_op = prototype['delete_op'] = function(p, _manifest, _clone) {
  var $499_this, $500_trial, $501_trial, $502_key, $503_list, $504_length, $505_none, $506_key, $507_iter, $508_elem, $509_none, $510_this, $511_key, $512_list, $513_none, $514_trial, $515_trial, $516_key, $517_list, $518_length, $519_none, $520_key, $521_iter, $522_elem, $523_none, $524_key, $525_list, $526_none, $527_trial, $528_trial, $529_trial, $530_trial, $ = undefined,
    $_c, $_d, _deletel, _deleter, _dest = p,
    _ignore, _index, _splicer; {
    if ($500_trial = (_mustIterate(_dest))) {
      throw new Error('SAI: Attempt to DELETE from an iterator, which is not presently supported.');
    }
    if (!(_isObject(_dest))) {
      throw new Error('SAI: Attempt to DELETE from something that\'s not a list or traits.');
    }
    if ($501_trial = (_clone)) {
      _dest = $AI.clone_op(_dest);
    }
    _splicer = function(p) {
      var _index = p; {
        if (!((_index === undefined))) {
          _dest.splice(_index, 1);
        }
      }
    };
    _deleter = function(p, _index) {
      var _ignore = p; {
        if (!((_index === undefined))) {
          delete _dest[_index];
        }
      }
    };
    _deletel = function(p, _ignore) {
      var _index = p; {
        if (!((_index === undefined))) {
          delete _dest[_index];
        }
      }
    };
    if ($530_trial = (_isArray(_dest))) {
      if (!(_isMergable(_manifest))) {
        _splicer(_manifest);
      } else if ($514_trial = (_isArray(_manifest))) {
        var $503_list = _manifest,
          $502_key;
        if (undefined === $503_list) $503_list = [];
        var $504_length = $503_list.length;
        for ($502_key = 0; $502_key < $504_length; $502_key++) {
          _splicer($503_list[$502_key], $502_key, $503_list);
        }
      } else if ($515_trial = (_mustIterate(_manifest))) {
        var $507_iter = $AI.iterator_op(_manifest);
        var $508_elem = $507_iter.next();
        var $506_key = 0;
        if (!$508_elem.done)
          do {
            _splicer($508_elem.value, $506_key);
            $506_key++;
            $508_elem = $507_iter.next();
          } while (!$508_elem.done);
      } else {
        var $512_list = _manifest,
          $511_key = undefined;
        if (undefined === $512_list) $512_list = {};
        for ($511_key in $512_list) {
          $510_this = $512_list[$511_key];
          let _index = parseInt($511_key);
          if (!(isNaN(_index))) {
            _dest.splice(_index, 1);
          };
        }
      }
    } else {
      if (!(_isMergable(_manifest))) {
        delete _dest[_manifest];
      } else if ($527_trial = (_isArray(_manifest))) {
        var $517_list = _manifest,
          $516_key;
        if (undefined === $517_list) $517_list = [];
        var $518_length = $517_list.length;
        for ($516_key = 0; $516_key < $518_length; $516_key++) {
          _deletel($517_list[$516_key], $516_key, $517_list);
        }
      } else if ($528_trial = (_mustIterate(_manifest))) {
        var $521_iter = $AI.iterator_op(_manifest);
        var $522_elem = $521_iter.next();
        var $520_key = 0;
        if (!$522_elem.done)
          do {
            _deletel($522_elem.value, $520_key);
            $520_key++;
            $522_elem = $521_iter.next();
          } while (!$522_elem.done);
      } else if ($529_trial = (_isObject(_manifest))) {
        var $525_list = _manifest,
          $524_key = undefined;
        if (undefined === $525_list) $525_list = {};
        for ($524_key in $525_list) {
          _deleter($525_list[$524_key], $524_key, $525_list);
        }
      } else {
        delete _dest[_manifest];
      }
    }
    return (_dest);
  }
};
var $41g = prototype['deepFreeze'] || function() {};
var _deepFreeze = prototype['deepFreeze'] = function(p) {
  var $531_this, $532_trial, $533_trial, $534_trial, $535_this, $536_key, $537_list, $538_none, $ = undefined,
    $_c, $_d, _o = p; {
    Object.freeze(_o);
    var $537_list = _o,
      $536_key = undefined;
    if (undefined === $537_list) $537_list = {};
    for ($536_key in $537_list) {
      $535_this = $537_list[$536_key];
      if ($532_trial = ((!(_o.hasOwnProperty($536_key))))) {
        continue;;
      }
      if ($533_trial = (('object' !== typeof($535_this)))) {
        continue;;
      }
      if ($534_trial = (Object.isFrozen($535_this))) {
        continue;;
      }
      _deepFreeze($535_this);;
    }
  }
};
var $42g = prototype['l_op'] || function() {};
var _l_op = prototype['l_op'] = function(p, _a) {
  var $539_this, $540_this, $541_key, $542_list, $543_length, $544_this, $545_key, $546_iter, $547_elem, $548_this, $549_key, $550_list, $551_trial, $552_trial, $553_trial, $554_trial, $555_this, $556_key, $557_list, $558_length, $559_none, $560_trial, $561_this, $562_key, $563_iter, $564_elem, $565_none, $566_trial, $567_this, $568_key, $569_list, $570_none, $571_trial, $572_trial, $573_trial, $574, $ = undefined,
    _op = p; {
    switch ($574 = (_op)) {
      case 'and':
        if ($551_trial = (_isArray(_a))) {
          var $542_list = _a,
            $541_key;
          if (undefined === $542_list) $542_list = [];
          var $543_length = $542_list.length;
          for ($541_key = 0; $541_key < $543_length; $541_key++) {
            $540_this = $542_list[$541_key];
            if (!($540_this)) {
              return ($540_this);;
            };
          }
          if ($541_key === 0) {
            return (undefined);
          }
          return (_a);
        } else if ($552_trial = (_mustIterate(_a))) {
          return (function*(p) {
            {
              var $546_iter = $AI.iterator_op(_a);
              var $547_elem = $546_iter.next();
              if ($547_elem.done) {
                yield(undefined);
              } else
                for (var $545_key = 0; !$547_elem.done; $547_elem = $546_iter.next()) {
                  $544_this = $547_elem.value;
                  if (!($544_this)) {
                    yield($544_this);;
                  };
                  $545_key++;
                }
              yield(true);
            }
          });
        } else if ($553_trial = (_isObject(_a))) {
          var $550_list = _a,
            $549_key = undefined;
          if (undefined === $550_list) $550_list = {};
          for ($549_key in $550_list) {
            $548_this = $550_list[$549_key];
            if (!($548_this)) {
              return ($548_this);;
            };
          }
          if ($549_key === undefined) {
            return (undefined);
          }
          return (_a);
        } else {
          return (_a);
        }
        break;
      case 'or':
        if ($571_trial = (_isArray(_a))) {
          var $557_list = _a,
            $556_key;
          if (undefined === $557_list) $557_list = [];
          var $558_length = $557_list.length;
          for ($556_key = 0; $556_key < $558_length; $556_key++) {
            $555_this = $557_list[$556_key];
            if ($554_trial = ($555_this)) {
              return ($555_this);;
            };
          }
          return (undefined);
        } else if ($572_trial = (_mustIterate(_a))) {
          return (function*(p) {
            {
              var $563_iter = $AI.iterator_op(_a);
              var $564_elem = $563_iter.next();
              if (!$564_elem.done)
                for (var $562_key = 0; !$564_elem.done; $564_elem = $563_iter.next()) {
                  $561_this = $564_elem.value;
                  if ($560_trial = ($561_this)) {
                    yield($561_this);;
                  };
                  $562_key++;
                }
              yield(undefined);
            }
          });
        } else if ($573_trial = (_isObject(_a))) {
          var $569_list = _a,
            $568_key = undefined;
          if (undefined === $569_list) $569_list = {};
          for ($568_key in $569_list) {
            $567_this = $569_list[$568_key];
            if ($566_trial = ($567_this)) {
              return ($567_this);;
            };
          }
          return (undefined);
        } else {
          return (_a);
        }
        break;
      default:
        throw new Error('SAI Runtime: unknown logical operator ' + _op + ' in sailib.l_op');
        break;
    }
  }
};
var $43g = prototype['xor_op'] || function() {};
var _xor_op = prototype['xor_op'] = function(p, _b) {
  var $575_this, $ = undefined,
    _a = p; {
    return (((_a) ? (((_b) ? (false) : (_a))) : (((_b) ? (_b) : (false)))));
  }
};
var $44g = prototype['min_op'] || function() {};
var _min_op = prototype['min_op'] = function(p, _b) {
  var $576_this, $ = undefined,
    _a = p; {
    return ((((_a < _b)) ? (_a) : (_b)));
  }
};
var $45g = prototype['max_op'] || function() {};
var _max_op = prototype['max_op'] = function(p, _b) {
  var $577_this, $ = undefined,
    _a = p; {
    return ((((_a > _b)) ? (_a) : (_b)));
  }
};
var $46g = prototype['compare_op'] || function() {};
var _compare_op = prototype['compare_op'] = function(p, _b) {
  var $578_this, $579_trial, $580_trial, $ = undefined,
    _a = p; {
    if ($579_trial = ((_a < _b))) {
      return ((0 - (1)));;
    }
    if ($580_trial = ((_a > _b))) {
      return (1);;
    }
    return (0);
  }
};
var $47g = prototype['keys_op'] || function() {};
var _keys_op = prototype['keys_op'] = function(p) {
  var $581_this, $582_counter, $583_stop, $584_step, $585_none, $586_this, $587_key, $588_iter, $589_elem, $590_none, $591_this, $592_key, $593_list, $594_none, $595_trial, $596_trial, $597_trial, $ = undefined,
    $_c, $_d, _a = p,
    _result; {
    _result = [];
    if ($595_trial = (_isArray(_a))) {
      var $582_counter = 0,
        $583_stop = _a.length,
        $584_step = 1;
      if (!($584_step > 0)) $count$stepup($584_step);
      for (; $582_counter < $583_stop; $582_counter = $582_counter + $584_step) {
        _result.push($582_counter);;
      }
    } else if ($596_trial = (_mustIterate(_a))) {
      var $588_iter = $AI.iterator_op(_a);
      var $589_elem = $588_iter.next();
      if (!$589_elem.done)
        for (var $587_key = 0; !$589_elem.done; $589_elem = $588_iter.next()) {
          $586_this = $589_elem.value;
          _result.push($587_key);;
          $587_key++;
        }
    } else if ($597_trial = (_isObject(_a))) {
      var $593_list = _a,
        $592_key = undefined;
      if (undefined === $593_list) $593_list = {};
      for ($592_key in $593_list) {
        $591_this = $593_list[$592_key];
        _result.push($592_key);;
      }
    }
    return (_result);
  }
};
var $48g = prototype['count_op'] || function() {};
var _count_op = prototype['count_op'] = function(p) {
  var $598_this, $599_trial, $600_this, $601_key, $602_iter, $603_elem, $604_none, $605_trial, $606_this, $607_key, $608_list, $609_none, $610_trial, $611_trial, $ = undefined,
    _a = p,
    _i; {
    if ($599_trial = (_isArray(_a))) {
      return (_a.length);
    }
    _i = 0;
    if ($605_trial = (_mustIterate(_a))) {
      var $602_iter = $AI.iterator_op(_a);
      var $603_elem = $602_iter.next();
      if (!$603_elem.done)
        for (var $601_key = 0; !$603_elem.done; $603_elem = $602_iter.next()) {
          $600_this = $603_elem.value;
          _i = (_i || 0) + 1;;
          $601_key++;
        }
      return (_i);
    }
    if ($610_trial = (_isObject(_a))) {
      var $608_list = _a,
        $607_key = undefined;
      if (undefined === $608_list) $608_list = {};
      for ($607_key in $608_list) {
        $606_this = $608_list[$607_key];
        _i = (_i || 0) + 1;;
      }
      return (_i);
    }
    if ($611_trial = ((_a === undefined))) {
      return (0);
    }
    return (1);
  }
};
var $49g = prototype['values_op'] || function() {};
var _values_op = prototype['values_op'] = function(p) {
  var $612_this, $613_trial, $614_trial, $615_this, $616_key, $617_list, $618_none, $619_trial, $620_trial, $ = undefined,
    $_c, $_d, _a = p,
    _result; {
    if ($613_trial = (_isArray(_a))) {
      return ($AI.clone_op(_a));
    }
    if ($614_trial = (_mustIterate(_a))) {
      return (_collect_op(_a));
    }
    _result = [];
    if ($619_trial = (_isObject(_a))) {
      var $617_list = _a,
        $616_key = undefined;
      if (undefined === $617_list) $617_list = {};
      for ($616_key in $617_list) {
        $615_this = $617_list[$616_key];
        _result.push($615_this);;
      }
      return (_result);
    }
    if ($620_trial = ((undefined !== _a))) {
      _result.push(_a);
    }
    return (_result);
  }
};
var $50g = prototype['newerror'] || function() {};
var _newerror = prototype['newerror'] = function(p, _file, _parameters) {
  var $621_this, $622_this, $623_key, $624_list, $625_none, $ = undefined,
    _e, _line = p; {
    _e = new Error(_parameters.message, _file, _line);
    var $624_list = _parameters,
      $623_key = undefined;
    if (undefined === $624_list) $624_list = {};
    for ($623_key in $624_list) {
      $622_this = $624_list[$623_key];
      _e[$623_key] = $622_this;;
    }
    return (_e);
  }
};
var $51g = prototype['number_op'] || function() {};
var _number_op = prototype['number_op'] = function(p) {
  var $626_this, $ = undefined,
    _n, _x = p; {
    _n = parseFloat(_x);
    return (((isNaN(_n)) ? (0) : (_n)));
  }
};
var $52g = prototype['expects_op'] || function() {};
var _expects_op = prototype['expects_op'] = function(p, _prototype) {
  var $627_this, $628_trial, $629_trial, $630_trial, $631_trial, $632_trial, $633_key, $634_list, $635_none, $ = undefined,
    $_c, $_d, _name, _param, _params = p,
    _result, _tester, _type; {
    _result = [];
    _tester = function(p, _name, _type) {
      var _param = p; {
        if ($629_trial = ((_type === typeof(_param)))) {;
        } else if ($630_trial = ((_param.isof && _param.isof[_type]))) {;
        } else {
          if ($628_trial = (_param.isa)) {
            _result.push({
              trait: _name,
              'expects': _type,
              found: _param.isa
            });
          } else {
            _result.push({
              trait: _name,
              'expects': _type,
              found: typeof(_param)
            });
          }
        }
      }
    };
    var $634_list = _prototype,
      $633_key = undefined;
    if (undefined === $634_list) $634_list = {};
    for ($633_key in $634_list) {
      _type = $634_list[$633_key];
      if ($631_trial = (($633_key === '_root'))) {
        _tester(_params, 'Root', _type);
      } else if (!(_params.hasOwnProperty($633_key))) {
        _result.push({
          trait: $633_key,
          'expects': _type,
          found: 'missing'
        });
      } else if ($632_trial = ((_type !== true))) {
        _tester(_params[$633_key], $633_key, _type);
      };
    }
    return (_result);
  }
};
var $53g = prototype['expectsThrow'] || function() {};
var _expectsThrow = prototype['expectsThrow'] = function(p, _prototype, _name) {
  var $636_this, $637_this, $638_key, $639_list, $640_none, $ = undefined,
    $_c, $_d, _err, _params = p,
    _x; {
    _x = _expects_op(_params, _prototype);
    if (!(_x.length)) {
      return;;
    }
    _err = [];
    var $639_list = _x,
      $638_key = undefined;
    if (undefined === $639_list) $639_list = {};
    for ($638_key in $639_list) {
      $637_this = $639_list[$638_key];
      _err.push('' + $637_this.trait + ' should be ' + ((($637_this.expects === 'true')) ? ('existence') : ($637_this.expects)) + ' but is instead ' + $637_this.found);;
    }
    throw new Error('SAI: parameter exception in ' + _name + '\n' + _err.join('\n'));
  }
};
var $54g = prototype['finalizePrototype'] || function() {};
var _finalizePrototype = prototype['finalizePrototype'] = function(p) {
  var $641_this, $642_this, $643_key, $644_list, $645_none, $646_this, $647_key, $648_list, $649_none, $650_this, $651_key, $652_list, $653_none, $654_trial, $655_trial, $656_trial, $ = undefined,
    $_c, $_d, _obj, _proto = p; {
    var $644_list = _proto.__tobelocked,
      $643_key = undefined;
    if (undefined === $644_list) $644_list = {};
    for ($643_key in $644_list) {
      $642_this = $644_list[$643_key];
      Object.defineProperty(_proto, $642_this, {
        configurable: false
      });;
    }
    delete _proto.__tobelocked;
    var $648_list = _proto.__tobefrozen,
      $647_key = undefined;
    if (undefined === $648_list) $648_list = {};
    for ($647_key in $648_list) {
      $646_this = $648_list[$647_key];
      _deepFreeze(_proto[$646_this]);;
    }
    delete _proto.__tobefrozen;
    if ($654_trial = (_proto.__unverified)) {
      var $652_list = _proto.__contracts,
        $651_key = undefined;
      if (undefined === $652_list) $652_list = {};
      for ($651_key in $652_list) {
        $650_this = $652_list[$651_key];
        if (!(_proto.hasOwnProperty($650_this))) {
          throw new Error('SAI: Contractually required trait ' + $650_this + ' does not exist in object ' + _proto.isa + '.');
        };
      }
      delete _proto.__unverified;
      delete _proto.__contracts;
    }
    _proto.constructor = function(p) {
      {
        _obj = Object.create(_proto);
        if ($655_trial = (_obj.Constructor)) {
          _obj.Constructor();;
        }
        if ($656_trial = (_obj.Instantiate)) {
          _obj.Instantiate.apply(_obj, arguments);;
        }
        return (_obj);
      }
    };
  }
};
var $55g = prototype['create_op_base'] || function() {};
prototype['create_op_base'] = function(p, _parameters) {
  var $657_this, $658_trial, $659_trial, $660_trial, $661_trial, $ = this['create_op_base'] ? this : $bindfail('create_op_base'),
    $_c, $_d, _fn, _mod, _name = p,
    _obj, _proto, _src; {
    _proto = $._protocache[_name];
    if (!(_proto)) {
      _fn = (_name + '.js');
      _src = _FS.readFileSync(_fn, 'utf8');
      if ($658_trial = ($AI.slice_op(('#!' === _src), 0, 2))) {
        _src = _src.replace(/\#\![^\r\n\u0085\u2028\u2029]+/, '');
      }
      _src = '(function(exports, require, module, __filename, __dirname) {' + _src + '});';
      _mod = eval(_src);
      _proto = _mod({}, require, {}, _fn, __dirname);
      $._protocache[_name] = _proto;
    }
    if (!(_proto)) {
      throw new Error('SAI.Create: Do not know how to create SAI object ' + _name + '.');
    }
    if ($661_trial = (('function' === typeof(_proto)))) {
      return (_proto.apply(undefined, _parameters));
    } else {
      _obj = Object.create(_proto);
      if ($659_trial = (_obj.Constructor)) {
        _obj.Constructor();;
      }
      if ($660_trial = (_obj.Instantiate)) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return (_obj);
    }
  }
};
var $56g = prototype['singleton_op'] || function() {};
prototype['singleton_op'] = function(p, _parameters) {
  var $662_this, $ = this['singleton_op'] ? this : $bindfail('singleton_op'),
    _name = p; {
    if (undefined === $._singletoncache[_name]) $._singletoncache[_name] = $.create_op(_name, _parameters);
    return ($._singletoncache[_name]);
  }
};
var $57g = prototype['environment_base'] || function() {};
prototype['environment_base'] = function(p) {
  var $663_this, $ = this['environment_base'] ? this : $bindfail('environment_base'); {
    return ({
      dynamic: false,
      static: true
    });
  }
};




// End of generated code

$AI.finalizePrototype(prototype);
var result=prototype;
switch (prototype.isof[prototype.isa].type) {
case 'singleton':
  prototype.Constructor();
  if (prototype.Instantiate) prototype.Instantiate();
  break;
case 'main':
  result=prototype.constructor();
  break;
default:
  result=prototype.constructor;
  break;
}
exports=result; try { module.exports=result; } catch(e) {};
return result;



