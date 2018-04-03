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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/sailib.sai","mtime":"2018-04-03T12:56:35.118Z","fetched":"2018-04-03T12:57:05.593Z"};
var _FS = require('fs');
var _GLOBAL = {
  instance: 0
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
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "canIterate", "mustIterate", "isObject", "isArray", "isString", "isMergable", "isCollection", "coverage", "assert", "debug_op", "iterator_op", "iterate_op", "kviterate_op", "collect_op", "drain_op", "sort_op", "enlist_op", "entrait_op", "alter_op", "observe_op", "audit_op", "concat_op", "map_op", "filter_op", "sum_op", "reduce_op", "slice_op", "element_op", "clone_op", "overlay_op", "select_op", "update_op", "delete_op", "deepFreeze", "l_op", "xor_op", "min_op", "max_op", "compare_op", "keys_op", "count_op", "values_op", "newerror", "number_op", "expects_op", "expectsThrow", "finalizePrototype", "create_op_base", "singleton_op", "environment_base", "isa"]);
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
    /*@:32*/
    _GLOBAL.instance = (_GLOBAL.instance || 0) + 1;
    /*@:33*/
    $.serial_number = _GLOBAL.instance;
    /*@:34*/
    $.create_op = function() {
      return ($.create_op_base).apply($, arguments);
    };
    /*@:36*/
    $.environment = function() {
      return ($.environment_base).apply($, arguments);
    };
    /*@:37*/
  }
};
var $4g = prototype['canIterate'] || function() {};
var _canIterate = prototype['canIterate'] = function(p) {
  var $1_this, $2_trial, $3_trial, $4_trial, $ = undefined,
    _i = p; {
    if (!(_i)) {
      return (false);
    }
    /*@:47*/
    if ($2_trial = (_i[Symbol.iterator])) {
      return (true);
    }
    /*@:49*/
    if ($3_trial = (('function' === typeof(_i)))) {
      return (true);
    }
    /*@:51*/
    if ($4_trial = (('function' === typeof(_i.next)))) {
      return (true);
    }
    /*@:53*/
    return (false);
    /*@:54*/
  }
};
var $5g = prototype['mustIterate'] || function() {};
var _mustIterate = prototype['mustIterate'] = function(p) {
  var $5_this, $6_trial, $7_trial, $ = undefined,
    _i = p; {
    if (!(_i)) {
      return (false);
    }
    /*@:64*/
    if ($6_trial = (('function' === typeof(_i.next)))) {
      return (true);
    }
    /*@:66*/
    if ($7_trial = (('function' === typeof(_i)))) {
      return (true);
    }
    /*@:68*/
    return (false);
    /*@:69*/
  }
};
var $6g = prototype['isObject'] || function() {};
var _isObject = prototype['isObject'] = function(p) {
  var $10_trial, $8_this, $9_trial, $ = undefined,
    _i = p; {
    if ($9_trial = ((_i === null))) {
      return (false);
    }
    /*@:79*/
    if ($10_trial = (('object' === typeof(_i)))) {
      return (true);
    }
    /*@:81*/
    return (false);
    /*@:82*/
  }
};
var $7g = prototype['isArray'] || function() {};
var _isArray = prototype['isArray'] = function(p) {
  var $11_this, $ = undefined,
    $_c, $_d, _i = p; {
    return (Array.isArray(_i));
    /*@:91*/
  }
};
var $8g = prototype['isString'] || function() {};
var _isString = prototype['isString'] = function(p) {
  var $12_this, $ = undefined,
    _i = p; {
    return (('string' === typeof(_i)));
    /*@:100*/
  }
};
var $9g = prototype['isMergable'] || function() {};
var _isMergable = prototype['isMergable'] = function(p) {
  var $13_this, $ = undefined,
    _i = p; {
    return ((_isArray(_i) || (_isObject(_i) || _canIterate(_i))));
    /*@:109*/
  }
};
var $10g = prototype['isCollection'] || function() {};
var _isCollection = prototype['isCollection'] = function(p) {
  var $14_this, $ = undefined,
    _i = p; {
    return ((_isArray(_i) || _isObject(_i)));
    /*@:118*/
  }
};
var $11g = prototype['coverage'] || function() {};
prototype['coverage'] = function(p, _description) {
  var $15_this, $16_this, $ = this['coverage'] ? this : $bindfail('coverage'),
    $_c, $_d, _test = p; {
    var $16_this = '' + _description + ' - ' + _test;
    if (!($._coveragecache[$16_this])) {
      $AI.debug_op('Covered ' + $16_this);
      /*@:128*/
      $._coveragecache[$16_this] = true;
      /*@:129*/
    };
  }
};
var $12g = prototype['assert'] || function() {};
var _assert = prototype['assert'] = function(p, _txt) {
  var $17_this, $ = undefined,
    _msg, _test = p; {
    if (!(_test)) {
      _msg = ('SAI: failed assertion ' + _txt);
      /*@:139*/
      throw new Error(_msg);
    }
    /*@:140*/
    return (_test);
    /*@:141*/
  }
};
var $13g = prototype['debug_op'] || function() {};
prototype['debug_op'] = function(p) {
  var $18_this, $19_trial, $20_trial, $21_error, $ = this['debug_op'] ? this : $bindfail('debug_op'),
    $_c, $_d, _o = p; {
    try {
      if (undefined === _o) _o = 'undefined';
      /*@:151*/
      if ($19_trial = (('function' === typeof(_o.next)))) {
        _o = '{possible iterator via .next}';
      } else if ($20_trial = (('function' === typeof(_o)))) {
        _o = '{function}';
      }
      /*@:155*/
      $.debugFunction(_o);
    } catch ($21_error) {
      $.debugFunction('SAILib.debug exception: ' + $21_error.message);
      /*@:158*/
      $.debugFunction(_o);
      /*@:159*/
    }
  }
};
var $14g = prototype['iterator_op'] || function() {};
var _iterator_op = prototype['iterator_op'] = function(p) {
  var $22_this, $23_trial, $24_trial, $25_trial, $ = undefined,
    $_c, $_d, _i = p; {
    if (!(_i)) {
      return (_i);
    }
    /*@:171*/
    if ($23_trial = (('function' === typeof(_i.next)))) {
      return (_i);
    }
    /*@:173*/
    if ($24_trial = (('function' === typeof(_i)))) {
      return (_i());
    }
    /*@:175*/
    if ($25_trial = (_i[Symbol.iterator])) {
      return (_i[Symbol.iterator]());
    }
    /*@:177*/
    return (_i);
    /*@:178*/
  }
};
var $15g = prototype['iterate_op'] || function() {};
var _iterate_op = prototype['iterate_op'] = function(p) {
  var $26_this, $27_trial, $28_trial, $29_trial, $30_this, $31_key, $32_list, $33_length, $34_none, $35_trial, $36_this, $37_key, $38_list, $39_none, $40_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($27_trial = ((undefined === _a))) {
      return (_a);
    }
    /*@:188*/
    if ($28_trial = (_mustIterate(_a))) {
      return (_iterator_op(_a));
    }
    /*@:190*/
    if ($29_trial = (_a[Symbol.iterator])) {
      return (_a[Symbol.iterator]());
    }
    /*@:192*/
    if ($35_trial = (_isArray(_a))) {
      return (function*(p) {
        {
          var $32_list = _a,
            $31_key;
          if (undefined === $32_list) $32_list = [];
          var $33_length = $32_list.length;
          for ($31_key = 0; $31_key < $33_length; $31_key++) {
            $30_this = $32_list[$31_key];
            yield($30_this);;
          }
        }
      }());
    }
    /*@:196*/
    if ($40_trial = (_isObject(_a))) {
      return (function*(p) {
        {
          var $38_list = _a,
            $37_key = undefined;
          if (undefined === $38_list) $38_list = {};
          for ($37_key in $38_list) {
            $36_this = $38_list[$37_key];
            yield([$37_key, $36_this]);;
          }
        }
      }());
    }
    /*@:200*/
    return (function*(p) {
      {
        yield(_a);
        /*@:202*/
      }
    }());
  }
};
var $16g = prototype['kviterate_op'] || function() {};
var _kviterate_op = prototype['kviterate_op'] = function(p) {
  var $41_this, $42_trial, $43_this, $44_key, $45_iter, $46_elem, $47_none, $48_trial, $49_this, $50_key, $51_iter, $52_elem, $53_none, $54_trial, $55_this, $56_key, $57_list, $58_length, $59_none, $60_trial, $61_this, $62_key, $63_list, $64_none, $65_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($42_trial = ((_a === undefined))) {
      return (function*(p) {
        {;
        }
      }());
    }
    /*@:215*/
    if ($48_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $45_iter = $AI.iterator_op(_a);
          var $46_elem = $45_iter.next();
          if (!$46_elem.done)
            for (var $44_key = 0; !$46_elem.done; $46_elem = $45_iter.next()) {
              $43_this = $46_elem.value;
              yield([$44_key, $43_this]);;
              $44_key++;
            }
        }
      }());
    }
    /*@:219*/
    if ($54_trial = (_a[Symbol.iterator])) {
      return (function*(p) {
        {
          var $51_iter = $AI.iterator_op(_a);
          var $52_elem = $51_iter.next();
          if (!$52_elem.done)
            for (var $50_key = 0; !$52_elem.done; $52_elem = $51_iter.next()) {
              $49_this = $52_elem.value;
              yield([$50_key, $49_this]);;
              $50_key++;
            }
        }
      }());
    }
    /*@:223*/
    if ($60_trial = (_isArray(_a))) {
      return (function*(p) {
        {
          var $57_list = _a,
            $56_key;
          if (undefined === $57_list) $57_list = [];
          var $58_length = $57_list.length;
          for ($56_key = 0; $56_key < $58_length; $56_key++) {
            $55_this = $57_list[$56_key];
            yield([$56_key, $55_this]);;
          }
        }
      }());
    }
    /*@:227*/
    if ($65_trial = (_isObject(_a))) {
      return (function*(p) {
        {
          var $63_list = _a,
            $62_key = undefined;
          if (undefined === $63_list) $63_list = {};
          for ($62_key in $63_list) {
            $61_this = $63_list[$62_key];
            yield([$62_key, $61_this]);;
          }
        }
      }());
    }
    /*@:231*/
    return (function*(p) {
      {
        yield([0, _a]);
        /*@:233*/
      }
    }());
  }
};
var $17g = prototype['collect_op'] || function() {};
var _collect_op = prototype['collect_op'] = function(p) {
  var $66_this, $67_trial, $68_this, $69_key, $70_iter, $71_elem, $72_none, $ = undefined,
    $_c, $_d, _a, _i = p; {
    if ($67_trial = ((undefined === _i))) {
      return (_i);
    }
    /*@:244*/
    if (!(_mustIterate(_i))) {
      return (_i);
      /*@:246*/
    }
    /*@:247*/
    _a = [];
    /*@:248*/
    var $70_iter = $AI.iterator_op(_i);
    var $71_elem = $70_iter.next();
    if (!$71_elem.done)
      for (var $69_key = 0; !$71_elem.done; $71_elem = $70_iter.next()) {
        $68_this = $71_elem.value;
        _a.push($68_this);;
        $69_key++;
      }
    /*@:250*/
    return (_a);
    /*@:251*/
  }
};
var $18g = prototype['drain_op'] || function() {};
var _drain_op = prototype['drain_op'] = function(p) {
  var $73_this, $74_trial, $75_this, $76_key, $77_iter, $78_elem, $79_none, $ = undefined,
    _i = p; {
    if ($74_trial = ((undefined === _i))) {
      return (_i);
    }
    /*@:261*/
    if (!(_mustIterate(_i))) {
      return (_i);
      /*@:263*/
    }
    /*@:264*/
    var $77_iter = $AI.iterator_op(_i);
    var $78_elem = $77_iter.next();
    if (!$78_elem.done)
      for (var $76_key = 0; !$78_elem.done; $78_elem = $77_iter.next()) {
        $75_this = $78_elem.value;; /*@:266*/ ;
        $76_key++;
      }
  }
};
var $19g = prototype['sort_op'] || function() {};
var _sort_op = prototype['sort_op'] = function(p, _fn) {
  var $80_this, $81_trial, $82_trial, $83_trial, $ = undefined,
    _a = p; {
    if ($81_trial = (_isArray(_a))) {
      return (_a.slice(0).sort(_fn));
    }
    /*@:276*/
    if ($82_trial = (_mustIterate(_a))) {
      return (_collect_op(_a).sort(_fn));
    }
    /*@:278*/
    if ($83_trial = (_isObject(_a))) {
      return (_values_op(_a).sort(_fn));
    }
    /*@:280*/
    return (_a);
    /*@:281*/
  }
};
var $20g = prototype['enlist_op'] || function() {};
var _enlist_op = prototype['enlist_op'] = function(p) {
  var $84_this, $85_trial, $86_trial, $87_this, $88_key, $89_iter, $90_elem, $91_none, $92_this, $93_key, $94_list, $95_none, $96_trial, $97_trial, $ = undefined,
    $_c, $_d, _a = p,
    _out; {
    if ($85_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:297*/
    if ($86_trial = (_isArray(_a))) {
      return (_a);;
    }
    /*@:298*/
    _out = [];
    /*@:300*/
    if ($96_trial = (_mustIterate(_a))) {
      var $89_iter = $AI.iterator_op(_a);
      var $90_elem = $89_iter.next();
      if (!$90_elem.done)
        for (var $88_key = 0; !$90_elem.done; $90_elem = $89_iter.next()) {
          $87_this = $90_elem.value;
          _out.push($87_this);;
          $88_key++;
        }
    } else if ($97_trial = (_isObject(_a))) {
      var $94_list = _a,
        $93_key = undefined;
      if (undefined === $94_list) $94_list = {};
      for ($93_key in $94_list) {
        $92_this = $94_list[$93_key];
        _out.push([$93_key, $92_this]);;
      }
    } else {
      _out.push(_a);
    }
    /*@:308*/
    return (_out);
    /*@:309*/
  }
};
var $21g = prototype['entrait_op'] || function() {};
var _entrait_op = prototype['entrait_op'] = function(p) {
  var $100_trial, $101_this, $102_key, $103_iter, $104_elem, $105_none, $106_this, $107_key, $108_list, $109_length, $110_none, $111_trial, $112_trial, $113_trial, $98_this, $99_trial, $ = undefined,
    $_c, $_d, _a = p,
    _assign, _k, _out, _v; {
    if ($99_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:325*/
    _out = [];
    /*@:327*/
    _assign = function(p, _v) {
      var _k = p; {
        if ($100_trial = (((_k !== undefined) && (_v !== undefined)))) {
          _out[_k] = _v;
          /*@:330*/
        }
      }
    };
    /*@:331*/
    if ($111_trial = (_mustIterate(_a))) {
      var $103_iter = $AI.iterator_op(_a);
      var $104_elem = $103_iter.next();
      if (!$104_elem.done)
        for (var $102_key = 0; !$104_elem.done; $104_elem = $103_iter.next()) {
          $101_this = $104_elem.value;
          _assign($101_this[0], $101_this[1]);;
          $102_key++;
        }
    } else if ($112_trial = (_isArray(_a))) {
      var $108_list = _a,
        $107_key;
      if (undefined === $108_list) $108_list = [];
      var $109_length = $108_list.length;
      for ($107_key = 0; $107_key < $109_length; $107_key++) {
        $106_this = $108_list[$107_key];
        _assign($106_this[0], $106_this[1]);;
      }
    } else if ($113_trial = (_isObject(_a))) {
      return (_a);
    } else {
      _out[_a] = true;
      /*@:341*/
    }
    /*@:342*/
    return (_out);
    /*@:343*/
  }
};
var $22g = prototype['alter_op'] || function() {};
var _alter_op = prototype['alter_op'] = function(p, _fn) {
  var $114_this, $ = undefined,
    _a = p; {
    return (_fn(_a));
    /*@:352*/
  }
};
var $23g = prototype['observe_op'] || function() {};
var _observe_op = prototype['observe_op'] = function(p, _fn) {
  var $115_this, $ = undefined,
    $_c, $_d, _a = p; {
    _fn(_a);
    /*@:361*/
    return (_a);
    /*@:362*/
  }
};
var $24g = prototype['audit_op'] || function() {};
var _audit_op = prototype['audit_op'] = function(p, _fn) {
  var $116_this, $117_this, $118_key, $119_list, $120_length, $121_none, $122_this, $123_key, $124_iter, $125_elem, $126_none, $127_this, $128_key, $129_list, $130_none, $131_trial, $132_trial, $133_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($131_trial = (_isArray(_a))) {
      var $119_list = _a,
        $118_key;
      if (undefined === $119_list) $119_list = [];
      var $120_length = $119_list.length;
      for ($118_key = 0; $118_key < $120_length; $118_key++) {
        $117_this = $119_list[$118_key];
        _fn($117_this, $118_key);;
      }
    } else if ($132_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $124_iter = $AI.iterator_op(_a);
          var $125_elem = $124_iter.next();
          if (!$125_elem.done)
            for (var $123_key = 0; !$125_elem.done; $125_elem = $124_iter.next()) {
              $122_this = $125_elem.value;
              _fn($122_this, $123_key);
              /*@:379*/
              yield($122_this);;
              $123_key++;
            }
        }
      }());
    } else if ($133_trial = (_isObject(_a))) {
      var $129_list = _a,
        $128_key = undefined;
      if (undefined === $129_list) $129_list = {};
      for ($128_key in $129_list) {
        $127_this = $129_list[$128_key];
        _fn($127_this, $128_key);;
      }
    }
    /*@:383*/
    return (_a);
    /*@:384*/
  }
};
var $25g = prototype['concat_op'] || function() {};
var _concat_op = prototype['concat_op'] = function(p, _b, _inplace) {
  var $134_this, $135_trial, $136_trial, $137_trial, $138_trial, $139_trial, $140_this, $141_key, $142_iter, $143_elem, $144_none, $145_this, $146_key, $147_iter, $148_elem, $149_none, $150_trial, $151_this, $152_key, $153_iter, $154_elem, $155_none, $156_this, $157_key, $158_list, $159_length, $160_none, $161_trial, $162_this, $163_key, $164_iter, $165_elem, $166_none, $167_trial, $168_trial, $169_this, $170_key, $171_iter, $172_elem, $173_none, $174_trial, $175_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($137_trial = ((undefined === _a))) {
      if ($135_trial = ((undefined === _b))) {
        return (undefined);;
      }
      /*@:416*/
      if ($136_trial = ((_isArray(_b) || _mustIterate(_b)))) {
        return (_b);;
      }
      /*@:417*/
      return ([_b]);
      /*@:418*/
    }
    /*@:419*/
    if ($139_trial = ((undefined === _b))) {
      if ($138_trial = ((_isArray(_a) || _mustIterate(_a)))) {
        return (_a);;
      }
      /*@:421*/
      return ([_a]);
      /*@:422*/
    }
    /*@:423*/
    if ($167_trial = (_mustIterate(_a))) {
      if ($150_trial = (_mustIterate(_b))) {
        return (function*(p) {
          {
            var $142_iter = $AI.iterator_op(_a);
            var $143_elem = $142_iter.next();
            if (!$143_elem.done)
              for (var $141_key = 0; !$143_elem.done; $143_elem = $142_iter.next()) {
                $140_this = $143_elem.value;
                yield($140_this);;;
                $141_key++;
              }
            /*@:427*/
            var $147_iter = $AI.iterator_op(_b);
            var $148_elem = $147_iter.next();
            if (!$148_elem.done)
              for (var $146_key = 0; !$148_elem.done; $148_elem = $147_iter.next()) {
                $145_this = $148_elem.value;
                yield($145_this);;;
                $146_key++;
              }
            /*@:428*/
          }
        }());
      }
      /*@:429*/
      if ($161_trial = (_isArray(_b))) {
        _b = $AI.clone_op(_b);
        /*@:431*/
        return (function*(p) {
          {
            var $153_iter = $AI.iterator_op(_a);
            var $154_elem = $153_iter.next();
            if (!$154_elem.done)
              for (var $152_key = 0; !$154_elem.done; $154_elem = $153_iter.next()) {
                $151_this = $154_elem.value;
                yield($151_this);;;
                $152_key++;
              }
            /*@:433*/
            var $158_list = _b,
              $157_key;
            if (undefined === $158_list) $158_list = [];
            var $159_length = $158_list.length;
            for ($157_key = 0; $157_key < $159_length; $157_key++) {
              $156_this = $158_list[$157_key];
              yield($156_this);;;
            }
            /*@:434*/
          }
        }());
      }
      /*@:435*/
      return (function*(p) {
        {
          var $164_iter = $AI.iterator_op(_a);
          var $165_elem = $164_iter.next();
          if (!$165_elem.done)
            for (var $163_key = 0; !$165_elem.done; $165_elem = $164_iter.next()) {
              $162_this = $165_elem.value;
              yield($162_this);;;
              $163_key++;
            }
          /*@:437*/
          yield(_b);
          /*@:438*/
        }
      }());
    }
    /*@:439*/
    if ($168_trial = ((!(_isArray(_a))))) {
      _a = [_a];
    } else if (!(_inplace)) {
      _a = $AI.clone_op(_a);
      /*@:443*/
    }
    /*@:444*/
    if ($174_trial = (_mustIterate(_b))) {
      var $171_iter = $AI.iterator_op(_b);
      var $172_elem = $171_iter.next();
      if (!$172_elem.done)
        for (var $170_key = 0; !$172_elem.done; $172_elem = $171_iter.next()) {
          $169_this = $172_elem.value;
          _a.push($169_this);;;
          $170_key++;
        }
    } else if ($175_trial = (_isArray(_b))) {
      _a = _a.concat(_b);
    } else {
      _a.push(_b);
      /*@:450*/
    }
    /*@:451*/
    return (_a);
    /*@:452*/
  }
};
var $26g = prototype['map_op'] || function() {};
var _map_op = prototype['map_op'] = function(p, _fn) {
  var $176_this, $177_trial, $178_this, $179_key, $180_list, $181_length, $182_none, $183_trial, $184_this, $185_key, $186_iter, $187_elem, $188_none, $189_trial, $190_this, $191_key, $192_list, $193_none, $194_trial, $ = undefined,
    $_c, $_d, _a = p,
    _r; {
    if ($177_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:463*/
    if ($183_trial = (_isArray(_a))) {
      _r = [];
      /*@:466*/
      var $180_list = _a,
        $179_key;
      if (undefined === $180_list) $180_list = [];
      var $181_length = $180_list.length;
      for ($179_key = 0; $179_key < $181_length; $179_key++) {
        $178_this = $180_list[$179_key];
        _r[$179_key] = _fn($178_this, $179_key);;;
      }
      /*@:467*/
      return (_r);
      /*@:468*/
    }
    /*@:469*/
    if ($189_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $186_iter = $AI.iterator_op(_a);
          var $187_elem = $186_iter.next();
          if (!$187_elem.done)
            for (var $185_key = 0; !$187_elem.done; $187_elem = $186_iter.next()) {
              $184_this = $187_elem.value;
              yield(_fn($184_this, $185_key));;;
              $185_key++;
            }
          /*@:472*/
        }
      }());
    }
    /*@:473*/
    if ($194_trial = (_isObject(_a))) {
      _r = {};
      /*@:475*/
      var $192_list = _a,
        $191_key = undefined;
      if (undefined === $192_list) $192_list = {};
      for ($191_key in $192_list) {
        $190_this = $192_list[$191_key];
        _r[$191_key] = _fn($190_this, $191_key);;;
      }
      /*@:476*/
      return (_r);
      /*@:477*/
    }
    /*@:478*/
    return (_fn(_a, undefined));
    /*@:479*/
  }
};
var $27g = prototype['filter_op'] || function() {};
var _filter_op = prototype['filter_op'] = function(p, _fn) {
  var $195_this, $196_trial, $197_trial, $198_this, $199_key, $200_list, $201_length, $202_none, $203_trial, $204_trial, $205_this, $206_key, $207_iter, $208_elem, $209_none, $210_trial, $211_trial, $212_this, $213_key, $214_list, $215_none, $216_trial, $ = undefined,
    $_c, $_d, _a = p,
    _r; {
    if ($196_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:491*/
    if ($203_trial = (_isArray(_a))) {
      _r = [];
      /*@:494*/
      var $200_list = _a,
        $199_key;
      if (undefined === $200_list) $200_list = [];
      var $201_length = $200_list.length;
      for ($199_key = 0; $199_key < $201_length; $199_key++) {
        $198_this = $200_list[$199_key];
        if ($197_trial = (_fn($198_this, $199_key))) {
          _r.push($198_this);;
        };;
      }
      /*@:495*/
      return (_r);
      /*@:496*/
    }
    /*@:497*/
    if ($210_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $207_iter = $AI.iterator_op(_a);
          var $208_elem = $207_iter.next();
          if (!$208_elem.done)
            for (var $206_key = 0; !$208_elem.done; $208_elem = $207_iter.next()) {
              $205_this = $208_elem.value;
              if ($204_trial = (_fn($205_this, $206_key))) {
                yield($205_this);;
              };;
              $206_key++;
            }
          /*@:500*/
        }
      }());
    }
    /*@:501*/
    if ($216_trial = (_isObject(_a))) {
      _r = {};
      /*@:503*/
      var $214_list = _a,
        $213_key = undefined;
      if (undefined === $214_list) $214_list = {};
      for ($213_key in $214_list) {
        $212_this = $214_list[$213_key];
        if ($211_trial = (_fn($212_this, $213_key))) {
          _r[$213_key] = $212_this;;
        };;
      }
      /*@:504*/
      return (_r);
      /*@:505*/
    }
    /*@:506*/
    return (((_fn(_a, undefined)) ? (_a) : (undefined)));
    /*@:507*/
  }
};
var $28g = prototype['sum_op'] || function() {};
var _sum_op = prototype['sum_op'] = function(p, _fn, _accum) {
  var $217_this, $218_trial, $219_this, $220_trial, $221, $222_trial, $223_this, $224_key, $225_list, $226_none, $227_trial, $ = undefined,
    $_c, $_d, _a = p,
    _k, _l, _step; {
    if ($218_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:519*/
    if ($220_trial = (_isArray(_a))) {
      _l = _a.length;
      /*@:522*/
      if (!(_l)) {
        return (_accum);;
      }
      /*@:523*/
      _k = 0;
      /*@:524*/
      var $219_this;
      while ($219_this = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        /*@:526*/
        _k = (_k || 0) + 1;
      }
      /*@:527*/
      return (_accum);
      /*@:528*/
    }
    /*@:529*/
    if ($222_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          $221 = _a;
          _a = $AI.iterate_op($221);
          /*@:532*/
          _step = _a.next();
          /*@:533*/
          _k = 0;
          /*@:534*/
          while (!(_step.done)) {
            _accum = _fn(_accum, _step.value, _k);
            /*@:536*/
            _step = _a.next();
            /*@:537*/
            _k = (_k || 0) + 1;
          }
          /*@:538*/
          yield(_accum);
          /*@:539*/
        }
      }());
    }
    /*@:540*/
    if ($227_trial = (_isObject(_a))) {
      var $225_list = _a,
        $224_key = undefined;
      if (undefined === $225_list) $225_list = {};
      for ($224_key in $225_list) {
        $223_this = $225_list[$224_key];
        _accum = _fn(_accum, $223_this, $224_key);;
      }
      /*@:543*/
      return (_accum);
      /*@:544*/
    }
    /*@:546*/
    return (_sum_op([_a], _fn, _accum));
    /*@:547*/
  }
};
var $29g = prototype['reduce_op'] || function() {};
var _reduce_op = prototype['reduce_op'] = function(p, _fn) {
  var $228_this, $229_trial, $230_this, $231_trial, $232, $233_trial, $234_trial, $235_trial, $236_this, $237_key, $238_list, $239_none, $240_trial, $ = undefined,
    $_c, $_d, _a = p,
    _accum, _init, _k, _l, _step; {
    if ($229_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:559*/
    if ($231_trial = (_isArray(_a))) {
      _l = _a.length;
      /*@:562*/
      if (!(_l)) {
        return (undefined);;
      }
      /*@:563*/
      _accum = $AI.clone_op(_a[0]);
      /*@:564*/
      _k = 1;
      /*@:565*/
      var $230_this;
      while ($230_this = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        /*@:567*/
        _k = (_k || 0) + 1;
      }
      /*@:568*/
      return (_accum);
      /*@:569*/
    }
    /*@:570*/
    if ($234_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          $232 = _a;
          _a = $AI.iterate_op($232);
          /*@:573*/
          _step = _a.next();
          /*@:574*/
          if ($233_trial = (_step.done)) {
            return (undefined);
          }
          /*@:576*/
          _accum = $AI.clone_op(_step.value);
          /*@:577*/
          _k = 1;
          /*@:578*/
          _step = _a.next();
          /*@:579*/
          while (!(_step.done)) {
            _accum = _fn(_accum, _step.value, _k);
            /*@:581*/
            _step = _a.next();
            /*@:582*/
            _k = (_k || 0) + 1;
          }
          /*@:583*/
          yield(_accum);
          /*@:584*/
        }
      }());
    }
    /*@:585*/
    if ($240_trial = (_isObject(_a))) {
      _init = true;
      /*@:587*/
      var $238_list = _a,
        $237_key = undefined;
      if (undefined === $238_list) $238_list = {};
      for ($237_key in $238_list) {
        $236_this = $238_list[$237_key];
        if ($235_trial = (_init)) {
          _accum = $AI.clone_op($236_this);
          /*@:590*/
          _init = false;
        } else {
          _accum = _fn(_accum, $236_this, $237_key);
          /*@:593*/
        };
      }
      /*@:594*/
      return (_accum);
      /*@:595*/
    }
    /*@:597*/
    return (_reduce_op([_a], _fn));
    /*@:598*/
  }
};
var $30g = prototype['slice_op'] || function() {};
var _slice_op = prototype['slice_op'] = function(p, _st, _ct) {
  var $241_this, $242_trial, $243_trial, $244_trial, $245_trial, $246_trial, $247_trial, $248_trial, $249_trial, $250_trial, $251_trial, $252_trial, $253_trial, $254_trial, $255_trial, $256_trial, $257_trial, $258_trial, $259_trial, $260_this, $261_key, $262_iter, $263_elem, $264_none, $265_trial, $266_trial, $267_trial, $268_trial, $269_trial, $270_trial, $271_trial, $272_trial, $273_trial, $274_trial, $275_trial, $276_trial, $277_trial, $278_trial, $279_trial, $280_trial, $281_trial, $282_trial, $283, $284_trial, $285_trial, $286_this, $287_trial, $288_this, $ = undefined,
    $_c, $_d, _a = p,
    _cache, _crop, _keep, _len, _only, _size, _skip, _v; {
    if ($242_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:631*/
    if ($254_trial = (_isString(_a))) {
      if ($243_trial = ((_ct === 0))) {
        return ('');
      }
      /*@:635*/
      if ($244_trial = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
        return (_a);
      }
      /*@:637*/
      if ($245_trial = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
        return (_a.substring(0, _ct));
      }
      /*@:639*/
      _len = _a.length;
      /*@:640*/
      if ($250_trial = (((undefined === _st) && (_ct < 0)))) {
        return (_a.substring((_len + _ct), _len));
      } else if ($251_trial = (((0 === _st) && (_ct < 0)))) {
        return (_a.substring(0, (_len + _ct)));
      } else if ($252_trial = ((_st > 0))) {
        if ($246_trial = ((_ct < 0))) {
          return (_a.substring(_st, (_len + _ct)));
        } else if ($247_trial = ((_ct > 0))) {
          return (_a.substring(_st, (_st + _ct)));
        } else {
          return (_a.substring(_st, _len));
        }
      } else if ($253_trial = ((_st < 0))) {
        if ($248_trial = ((_ct < 0))) {
          return (_a.substring((_len + _st), (_len + _ct)));
        } else if ($249_trial = ((_ct > 0))) {
          return (_a.substring((_len + _st), (_len + (_st + _ct))));
        } else {
          return (_a.substring((_len + _st), _len));
        }
      }
      /*@:658*/
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
      /*@:659*/
    }
    /*@:661*/
    if ($256_trial = ((_ct === 0))) {
      if ($255_trial = (_mustIterate(_a))) {
        return (function*(p) {
          {;;
          }
        });
      } else {
        return ([]);
        /*@:666*/
      }
    }
    /*@:668*/
    if (!((_mustIterate(_a) || _isArray(_a)))) {
      _a = [_a];
      /*@:670*/
    }
    /*@:672*/
    if ($258_trial = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
      if ($257_trial = (_isArray(_a))) {
        return ($AI.clone_op(_a));
      } else {
        return (_a);
        /*@:677*/
      }
    }
    /*@:679*/
    if ($266_trial = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
      if ($265_trial = (_isArray(_a))) {
        return (_a.slice(0, _ct));
      } else {
        return (function*(p) {
          {
            var $262_iter = $AI.iterator_op(_a);
            var $263_elem = $262_iter.next();
            if (!$263_elem.done)
              for (var $261_key = 0; !$263_elem.done; $263_elem = $262_iter.next()) {
                $260_this = $263_elem.value;
                if ($259_trial = (($261_key < _ct))) {
                  yield($260_this);;
                } else {
                  break;;
                }
                /*@:687*/
                ;
                $261_key++;
              }
          }
        }());
      }
    }
    /*@:688*/
    if ($275_trial = (_isArray(_a))) {
      _len = _a.length;
      /*@:690*/
      if ($271_trial = (((undefined === _st) && (_ct < 0)))) {
        return (_a.slice((_len + _ct), _len));
      } else if ($272_trial = (((0 === _st) && (_ct < 0)))) {
        return (_a.slice(0, (_len + _ct)));
      } else if ($273_trial = ((_st > 0))) {
        if ($267_trial = ((_ct < 0))) {
          return (_a.slice(_st, (_len + _ct)));
        } else if ($268_trial = ((_ct > 0))) {
          return (_a.slice(_st, (_st + _ct)));
        } else {
          return (_a.slice(_st, _len));
        }
      } else if ($274_trial = ((_st < 0))) {
        if ($269_trial = ((_ct < 0))) {
          return (_a.slice((_len + _st), (_len + _ct)));
        } else if ($270_trial = ((_ct > 0))) {
          return (_a.slice((_len + _st), (_len + (_st + _ct))));
        } else {
          return (_a.slice((_len + _st), _len));
        }
      }
      /*@:708*/
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
      /*@:709*/
    }
    /*@:711*/
    _skip = 0;
    _crop = 0;
    _size = 0;
    _only = undefined;
    _keep = true;
    /*@:718*/
    if ($280_trial = (((undefined === _st) && (_ct < 0)))) {
      _keep = false;
      /*@:720*/
      _size = (0 - (_ct));
    } else if ($281_trial = ((_st < 0))) {
      _keep = false;
      /*@:723*/
      _size = (0 - (_st));
      /*@:724*/
      if ($276_trial = ((_ct < 0))) {
        _crop = (0 - (_ct));
      } else if ($277_trial = ((_ct > 0))) {
        _crop = (_size - _ct);
      }
    } else if ($282_trial = ((_st > 0))) {
      _skip = _st;
      /*@:730*/
      if ($278_trial = ((_ct < 0))) {
        _size = (0 - (_ct));
        /*@:732*/
        _crop = (0 - (_ct));
      } else if ($279_trial = ((_ct > 0))) {
        _only = _ct;
      }
    } else {
      _size = (0 - (_ct));
      /*@:737*/
      _crop = (0 - (_ct));
      /*@:738*/
    }
    /*@:739*/
    $283 = _a;
    _a = $AI.iterate_op($283);
    /*@:740*/
    return (function*(p) {
      {
        _cache = [];
        /*@:743*/
        _v = _a.next();
        /*@:744*/
        while (!(((_skip <= 0) || _v.done))) {
          _skip--;
          /*@:746*/
          _v = _a.next();
        }
        /*@:747*/
        while (!(_v.done)) {
          _cache.push(_v.value);
          /*@:749*/
          if ($287_trial = ((_cache.length > _size))) {
            var $286_this = _cache.shift();
            if ($285_trial = (_keep)) {
              if ($284_trial = ((_only <= 0))) {
                return;;
              }
              /*@:753*/
              _only--;
              /*@:754*/
              yield($286_this);
            };
          }
          /*@:755*/
          _v = _a.next();
        }
        /*@:756*/
        var $288_this;
        while ($288_this = ((_cache.length > _crop))) {
          yield(_cache.shift());
          /*@:758*/
        }
      }
    }());
  }
};
var $31g = prototype['element_op'] || function() {};
var _element_op = prototype['element_op'] = function(p, _index) {
  var $289_this, $290_trial, $291_trial, $292_trial, $293_trial, $ = undefined,
    _a = p; {
    if ($290_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:767*/
    if ($291_trial = (_isArray(_a))) {
      return (_a[_index]);
    }
    /*@:769*/
    if ($292_trial = (_mustIterate(_a))) {
      return (_slice_op(_a, _index, 1).next().value);
    }
    /*@:771*/
    if ($293_trial = (((_index === 0) || (_index === (0 - (1)))))) {
      return (_a);
    }
    /*@:773*/
    return (undefined);
    /*@:774*/
  }
};
var $32g = prototype['clone_op'] || function() {};
var _clone_op = prototype['clone_op'] = function(p) {
  var $294_this, $295_trial, $296_this, $297_key, $298_list, $299_none, $300_trial, $ = undefined,
    _a = p,
    _b; {
    if ($295_trial = (_isArray(_a))) {
      return (_a.slice(0));
    }
    /*@:784*/
    if ($300_trial = (_isObject(_a))) {
      _b = {};
      /*@:786*/
      var $298_list = _a,
        $297_key = undefined;
      if (undefined === $298_list) $298_list = {};
      for ($297_key in $298_list) {
        $296_this = $298_list[$297_key];
        _b[$297_key] = $296_this;;
      }
      /*@:788*/
      return (_b);
    }
    /*@:789*/
    return (_a);
    /*@:790*/
  }
};
var $33g = prototype['overlay_op'] || function() {};
var _overlay_op = prototype['overlay_op'] = function(p, _r) {
  var $301_this, $302_trial, $303_trial, $304_trial, $305_this, $306_key, $307_iter, $308_elem, $309_none, $310_this, $311_this, $312_key, $313_iter, $314_elem, $315_none, $316_trial, $317_trial, $318_trial, $319_this, $320_key, $321_list, $322_none, $323_trial, $324_this, $325_key, $326_list, $327_length, $328_none, $329_trial, $330, $331, $332_trial, $ = undefined,
    $_b, $_c, $_d, _i, _l = p,
    _v, _vl, _vr; {
    if ($302_trial = ((undefined === _l))) {
      _l = {};
      /*@:804*/
    }
    /*@:805*/
    if ($303_trial = ((!(_isMergable(_l))))) {
      throw new Error('SAI: Attempt to OVERLAY onto something that\'s not a collection/iterable.');
    }
    /*@:807*/
    if ($304_trial = ((!(_isMergable(_r))))) {
      throw new Error('SAI: Attempt to OVERLAY with something that\'s not a collection/iterable.');
      /*@:809*/
    }
    /*@:810*/
    if (!(_mustIterate(_l))) {
      _l = $AI.clone_op(_l);
      /*@:812*/
      if ($317_trial = (_mustIterate(_r))) {
        if ($316_trial = (_isArray(_l))) {
          return (function*(p) {
            {
              var $307_iter = $AI.iterator_op(_r);
              var $308_elem = $307_iter.next();
              if (!$308_elem.done)
                for (var $306_key = 0; !$308_elem.done; $308_elem = $307_iter.next()) {
                  $305_this = $308_elem.value;
                  yield(((undefined !== ($_b = $305_this)) ? $_b : _l[$306_key]));;
                  $306_key++;
                }
            }
          }());
        } else {
          var $313_iter = $AI.iterator_op(_r);
          var $314_elem = $313_iter.next();
          if (!$314_elem.done)
            for (var $312_key = 0; !$314_elem.done; $314_elem = $313_iter.next()) {
              $311_this = $314_elem.value;
              if (undefined !== ($310_this = ($311_this))) {
                _l[$312_key] = $310_this;
              };
              $312_key++;
            }
          /*@:821*/
          return (_l);
          /*@:822*/
        }
      }
      /*@:823*/
      if ($329_trial = (_isObject(_r))) {
        var $321_list = _r,
          $320_key = undefined;
        if (undefined === $321_list) $321_list = {};
        for ($320_key in $321_list) {
          $319_this = $321_list[$320_key];
          if ($318_trial = (($319_this !== undefined))) {
            _l[$320_key] = $319_this;
          };
        }
      } else {
        var $326_list = _r,
          $325_key;
        if (undefined === $326_list) $326_list = [];
        var $327_length = $326_list.length;
        for ($325_key = 0; $325_key < $327_length; $325_key++) {
          $324_this = $326_list[$325_key];
          if ($323_trial = (($324_this !== undefined))) {
            _l[$325_key] = $324_this;
          };
        }
      }
      /*@:831*/
      return (_l);
      /*@:832*/
    }
    /*@:833*/
    $330 = _l;
    _l = $AI.iterate_op($330);
    /*@:834*/
    if ($332_trial = (_mustIterate(_r))) {
      $331 = _r;
      _r = $AI.iterate_op($331);
      /*@:836*/
      return (function*(p) {
        {
          _vl = _l.next();
          /*@:838*/
          _vr = _r.next();
          /*@:839*/
          while (!(_vr.done)) {
            yield((((_vr.value === undefined)) ? (_vl.value) : (_vr.value)));
            /*@:841*/
            _vl = _l.next();
            /*@:842*/
            _vr = _r.next();
          }
          /*@:843*/
          yield*(_l);
          /*@:844*/
        }
      }());
    }
    /*@:845*/
    _r = $AI.clone_op(_r);
    /*@:846*/
    return (function*(p) {
      {
        _i = 0;
        /*@:848*/
        _v = _l.next();
        /*@:849*/
        while (!(_v.done)) {
          yield((((_r[_i] === undefined)) ? (_v.value) : (_r[_i])));
          /*@:851*/
          _i = (_i || 0) + 1;
          /*@:852*/
          _v = _l.next();
          /*@:853*/
        }
      }
    }());
  }
};
var $34g = prototype['select_op'] || function() {};
var _select_op = prototype['select_op'] = function(p, _manifest) {
  var $333_this, $334_trial, $335_this, $336_key, $337_list, $338_length, $339_none, $340_this, $341_key, $342_iter, $343_elem, $344_none, $345_trial, $346_trial, $347_this, $348_key, $349_list, $350_none, $351, $352_this, $353_this, $354_key, $355_iter, $356_elem, $357_none, $358_trial, $359, $360_this, $361_this, $362_key, $363_list, $364_length, $365_none, $366_trial, $367_this, $368_key, $369_trial, $370_trial, $371_this, $372_key, $373_iter, $374_elem, $375_none, $376_trial, $377_trial, $378_trial, $379_this, $380_key, $381_iter, $382_elem, $383_none, $384_trial, $385_this, $386_key, $387_list, $388_length, $389_none, $390_trial, $391_this, $392_key, $393_list, $394_none, $395_trial, $ = undefined,
    $_c, $_d, _buffer, _i, _l, _result, _src = p; {
    if (!(_isMergable(_src))) {
      throw new Error('SAI: Left argument to SELECT must be list/traits/iterable.');
      /*@:866*/
    }
    /*@:867*/
    if (!(_isMergable(_manifest))) {
      if ($334_trial = ((undefined === _manifest))) {
        return (_manifest);;
      }
      /*@:869*/
      _manifest = [_manifest];
      /*@:870*/
    }
    /*@:871*/
    if ($376_trial = (_isArray(_src))) {
      if ($345_trial = (_isArray(_manifest))) {
        _result = [];
        /*@:874*/
        var $337_list = _manifest,
          $336_key;
        if (undefined === $337_list) $337_list = [];
        var $338_length = $337_list.length;
        for ($336_key = 0; $336_key < $338_length; $336_key++) {
          $335_this = $337_list[$336_key];
          _result.push(_src[$335_this]);;
        }
        /*@:876*/
        return (_result);
        /*@:877*/
      } else if ($346_trial = (_mustIterate(_manifest))) {
        _src = $AI.clone_op(_src);
        /*@:880*/
        return (function*(p) {
          {
            var $342_iter = $AI.iterator_op(_manifest);
            var $343_elem = $342_iter.next();
            if (!$343_elem.done)
              for (var $341_key = 0; !$343_elem.done; $343_elem = $342_iter.next()) {
                $340_this = $343_elem.value;
                yield(_src[$340_this]);
                /*@:883*/
                ;
                $341_key++;
              }
          }
        }());
      }
      /*@:884*/
      _result = [];
      /*@:885*/
      var $349_list = _manifest,
        $348_key = undefined;
      if (undefined === $349_list) $349_list = {};
      for ($348_key in $349_list) {
        $347_this = $349_list[$348_key];
        _result.push(_src[$348_key]);;
      }
      /*@:887*/
      return (_result);
      /*@:888*/
    } else if ($377_trial = (_mustIterate(_src))) {
      if ($358_trial = (_mustIterate(_manifest))) {
        $351 = _src;
        _src = $AI.iterate_op($351);
        /*@:892*/
        return (function*(p) {
          {
            _l = _src.next();
            /*@:894*/
            _buffer = [];
            /*@:895*/
            var $355_iter = $AI.iterator_op(_manifest);
            var $356_elem = $355_iter.next();
            if (!$356_elem.done)
              for (var $354_key = 0; !$356_elem.done; $356_elem = $355_iter.next()) {
                $353_this = $356_elem.value;
                var $352_this;
                while ($352_this = (((!(_l.done)) && (_buffer.length <= $353_this)))) {
                  _buffer.push(_l.value);
                  /*@:898*/
                  _l = _src.next();
                }
                /*@:899*/
                yield(_buffer[$353_this]);
                /*@:900*/
                ;
                $354_key++;
              }
          }
        }());
      }
      /*@:901*/
      if ($366_trial = (_isArray(_manifest))) {
        _manifest = $AI.clone_op(_manifest);
        /*@:903*/
        $359 = _src;
        _src = $AI.iterate_op($359);
        /*@:904*/
        return (function*(p) {
          {
            _l = _src.next();
            /*@:906*/
            _buffer = [];
            /*@:907*/
            var $363_list = _manifest,
              $362_key;
            if (undefined === $363_list) $363_list = [];
            var $364_length = $363_list.length;
            for ($362_key = 0; $362_key < $364_length; $362_key++) {
              $361_this = $363_list[$362_key];
              var $360_this;
              while ($360_this = (((!(_l.done)) && (_buffer.length <= $361_this)))) {
                _buffer.push(_l.value);
                /*@:910*/
                _l = _src.next();
              }
              /*@:911*/
              yield(_buffer[$361_this]);
              /*@:912*/
              ;
            }
          }
        }());
      }
      /*@:913*/
      _manifest = $AI.sort_op($AI.map_op($AI.keys_op(_manifest), function($367_this, $368_key) {
        return ($AI.number_op($367_this));
      }), function(a, b) {
        var aa, bb;
        aa = a;
        bb = b;
        if (aa < bb) return -1;
        if (aa > bb) return 1;;
        return 0;
      });
      /*@:914*/
      return (function*(p) {
        {
          _i = 0;
          /*@:916*/
          var $373_iter = $AI.iterator_op(_src);
          var $374_elem = $373_iter.next();
          if (!$374_elem.done)
            for (var $372_key = 0; !$374_elem.done; $374_elem = $373_iter.next()) {
              $371_this = $374_elem.value;
              if ($370_trial = (($372_key === _manifest[_i]))) {
                yield($371_this);
                /*@:919*/
                _i = (_i || 0) + 1;
                /*@:920*/
                if ($369_trial = ((_i >= _manifest.length))) {
                  return;;
                }
                /*@:921*/
              };
              $372_key++;
            }
        }
      }());
    }
    /*@:922*/
    if ($384_trial = (_mustIterate(_manifest))) {
      _src = $AI.clone_op(_src);
      /*@:924*/
      return (function*(p) {
        {
          var $381_iter = $AI.iterator_op(_manifest);
          var $382_elem = $381_iter.next();
          if (!$382_elem.done)
            for (var $380_key = 0; !$382_elem.done; $382_elem = $381_iter.next()) {
              $379_this = $382_elem.value;
              if ($378_trial = (($379_this !== undefined))) {
                yield(_src[$379_this]);
                /*@:928*/
              };
              $380_key++;
            }
        }
      }());
    }
    /*@:929*/
    _result = {};
    /*@:930*/
    if ($390_trial = (_isArray(_manifest))) {
      var $387_list = _manifest,
        $386_key;
      if (undefined === $387_list) $387_list = [];
      var $388_length = $387_list.length;
      for ($386_key = 0; $386_key < $388_length; $386_key++) {
        $385_this = $387_list[$386_key];
        _result[$385_this] = _src[$385_this];;
      }
      /*@:933*/
      return (_result);
      /*@:934*/
    }
    /*@:935*/
    if ($395_trial = (_isObject(_manifest))) {
      var $393_list = _manifest,
        $392_key = undefined;
      if (undefined === $393_list) $393_list = {};
      for ($392_key in $393_list) {
        $391_this = $393_list[$392_key];
        _result[$392_key] = _src[$392_key];
        /*@:938*/
        ;
      }
    } else {
      _result[_manifest] = _src[_manifest];
      /*@:941*/
    }
    /*@:942*/
    return (_result);
    /*@:943*/
  }
};
var $35g = prototype['update_op'] || function() {};
var _update_op = prototype['update_op'] = function(p, _manifest) {
  var $396_this, $397_trial, $398_trial, $399_this, $400_key, $401_iter, $402_elem, $403_none, $404_trial, $405_this, $406_key, $407_list, $408_length, $409_none, $410_trial, $411_this, $412_key, $413_list, $414_none, $415_trial, $416_trial, $ = undefined,
    _dest = p; {
    if ($397_trial = ((undefined === _dest))) {
      _dest = {};
      /*@:956*/
    }
    /*@:957*/
    if (!((_isArray(_dest) || _isObject(_dest)))) {
      throw new Error('Attempt to UPDATE into something that\'s not a list or traits.');
      /*@:959*/
    }
    /*@:960*/
    if (!(_isMergable(_manifest))) {
      throw new Error('Attempt to UPDATE from something that\'s not a list or traits.');
      /*@:962*/
    }
    /*@:963*/
    if ($415_trial = (_mustIterate(_manifest))) {
      var $401_iter = $AI.iterator_op(_manifest);
      var $402_elem = $401_iter.next();
      if (!$402_elem.done)
        for (var $400_key = 0; !$402_elem.done; $402_elem = $401_iter.next()) {
          $399_this = $402_elem.value;
          if ($398_trial = (($399_this !== undefined))) {
            _dest[$400_key] = $399_this;;
          }
          /*@:966*/
          ;
          $400_key++;
        }
    } else if ($416_trial = (_isArray(_manifest))) {
      var $407_list = _manifest,
        $406_key;
      if (undefined === $407_list) $407_list = [];
      var $408_length = $407_list.length;
      for ($406_key = 0; $406_key < $408_length; $406_key++) {
        $405_this = $407_list[$406_key];
        if ($404_trial = (($405_this !== undefined))) {
          _dest[$406_key] = $405_this;;
        }
        /*@:970*/
        ;
      }
    } else {
      var $413_list = _manifest,
        $412_key = undefined;
      if (undefined === $413_list) $413_list = {};
      for ($412_key in $413_list) {
        $411_this = $413_list[$412_key];
        if ($410_trial = (($411_this !== undefined))) {
          _dest[$412_key] = $411_this;;
        }
        /*@:974*/
        ;
      }
    }
    /*@:975*/
    return (_dest);
    /*@:976*/
  }
};
var $36g = prototype['delete_op'] || function() {};
var _delete_op = prototype['delete_op'] = function(p, _manifest, _clone) {
  var $417_this, $418_trial, $419_trial, $420_key, $421_list, $422_length, $423_none, $424_key, $425_iter, $426_elem, $427_none, $428_this, $429_key, $430_list, $431_none, $432_trial, $433_trial, $434_key, $435_list, $436_length, $437_none, $438_key, $439_iter, $440_elem, $441_none, $442_key, $443_list, $444_none, $445_trial, $446_trial, $447_trial, $448_trial, $ = undefined,
    $_c, $_d, _deletel, _deleter, _dest = p,
    _ignore, _index, _splicer; {
    if ($418_trial = (_mustIterate(_dest))) {
      throw new Error('SAI: Attempt to DELETE from an iterator, which is not presently supported.');
    }
    /*@:990*/
    if (!(_isObject(_dest))) {
      throw new Error('SAI: Attempt to DELETE from something that\'s not a list or traits.');
      /*@:992*/
    }
    /*@:993*/
    if ($419_trial = (_clone)) {
      _dest = $AI.clone_op(_dest);
      /*@:995*/
    }
    /*@:996*/
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
          /*@:1006*/
        }
      }
    };
    /*@:1007*/
    if ($448_trial = (_isArray(_dest))) {
      if (!(_isMergable(_manifest))) {
        _splicer(_manifest);
      } else if ($432_trial = (_isArray(_manifest))) {
        var $421_list = _manifest,
          $420_key;
        if (undefined === $421_list) $421_list = [];
        var $422_length = $421_list.length;
        for ($420_key = 0; $420_key < $422_length; $420_key++) {
          _splicer($421_list[$420_key], $420_key, $421_list);
        }
      } else if ($433_trial = (_mustIterate(_manifest))) {
        var $425_iter = $AI.iterator_op(_manifest);
        var $426_elem = $425_iter.next();
        var $424_key = 0;
        if (!$426_elem.done)
          do {
            _splicer($426_elem.value, $424_key);
            $424_key++;
            $426_elem = $425_iter.next();
          } while (!$426_elem.done);
      } else {
        var $430_list = _manifest,
          $429_key = undefined;
        if (undefined === $430_list) $430_list = {};
        for ($429_key in $430_list) {
          $428_this = $430_list[$429_key];
          let _index = parseInt($429_key);
          /*@:1017*/
          if (!(isNaN(_index))) {
            _dest.splice(_index, 1);
            /*@:1019*/
          };
        }
      }
    } else {
      if (!(_isMergable(_manifest))) {
        delete _dest[_manifest];
      } else if ($445_trial = (_isArray(_manifest))) {
        var $435_list = _manifest,
          $434_key;
        if (undefined === $435_list) $435_list = [];
        var $436_length = $435_list.length;
        for ($434_key = 0; $434_key < $436_length; $434_key++) {
          _deletel($435_list[$434_key], $434_key, $435_list);
        }
      } else if ($446_trial = (_mustIterate(_manifest))) {
        var $439_iter = $AI.iterator_op(_manifest);
        var $440_elem = $439_iter.next();
        var $438_key = 0;
        if (!$440_elem.done)
          do {
            _deletel($440_elem.value, $438_key);
            $438_key++;
            $440_elem = $439_iter.next();
          } while (!$440_elem.done);
      } else if ($447_trial = (_isObject(_manifest))) {
        var $443_list = _manifest,
          $442_key = undefined;
        if (undefined === $443_list) $443_list = {};
        for ($442_key in $443_list) {
          _deleter($443_list[$442_key], $442_key, $443_list);
        }
      } else {
        delete _dest[_manifest];
        /*@:1031*/
      }
    }
    /*@:1032*/
    return (_dest);
    /*@:1033*/
  }
};
var $37g = prototype['deepFreeze'] || function() {};
var _deepFreeze = prototype['deepFreeze'] = function(p) {
  var $449_this, $450_trial, $451_trial, $452_trial, $453_this, $454_key, $455_list, $456_none, $ = undefined,
    $_c, $_d, _o = p; {
    Object.freeze(_o);
    /*@:1042*/
    var $455_list = _o,
      $454_key = undefined;
    if (undefined === $455_list) $455_list = {};
    for ($454_key in $455_list) {
      $453_this = $455_list[$454_key];
      if ($450_trial = ((!(_o.hasOwnProperty($454_key))))) {
        continue;;
      }
      /*@:1044*/
      if ($451_trial = (('object' !== typeof($453_this)))) {
        continue;;
      }
      /*@:1045*/
      if ($452_trial = (Object.isFrozen($453_this))) {
        continue;;
      }
      /*@:1046*/
      _deepFreeze($453_this);
      /*@:1047*/
      ;
    }
  }
};
var $38g = prototype['l_op'] || function() {};
var _l_op = prototype['l_op'] = function(p, _a) {
  var $457_this, $458_this, $459_key, $460_list, $461_length, $462_this, $463_key, $464_iter, $465_elem, $466_this, $467_key, $468_list, $469_trial, $470_trial, $471_trial, $472_trial, $473_this, $474_key, $475_list, $476_length, $477_none, $478_trial, $479_this, $480_key, $481_iter, $482_elem, $483_none, $484_trial, $485_this, $486_key, $487_list, $488_none, $489_trial, $490_trial, $491_trial, $492, $ = undefined,
    _op = p; {
    switch ($492 = (_op)) {
      case 'and':
        if ($469_trial = (_isArray(_a))) {
          var $460_list = _a,
            $459_key;
          if (undefined === $460_list) $460_list = [];
          var $461_length = $460_list.length;
          for ($459_key = 0; $459_key < $461_length; $459_key++) {
            $458_this = $460_list[$459_key];
            if (!($458_this)) {
              return ($458_this);;
            };
          }
          if ($459_key === 0) {
            return (undefined);
          }
          /*@:1062*/
          return (_a);
        } else if ($470_trial = (_mustIterate(_a))) {
          return (function*(p) {
            {
              var $464_iter = $AI.iterator_op(_a);
              var $465_elem = $464_iter.next();
              if ($465_elem.done) {
                yield(undefined);
              } else
                for (var $463_key = 0; !$465_elem.done; $465_elem = $464_iter.next()) {
                  $462_this = $465_elem.value;
                  if (!($462_this)) {
                    yield($462_this);;
                  };
                  $463_key++;
                }
              /*@:1069*/
              yield(true);
            }
          });
        } else if ($471_trial = (_isObject(_a))) {
          var $468_list = _a,
            $467_key = undefined;
          if (undefined === $468_list) $468_list = {};
          for ($467_key in $468_list) {
            $466_this = $468_list[$467_key];
            if (!($466_this)) {
              return ($466_this);;
            };
          }
          if ($467_key === undefined) {
            return (undefined);
          }
          /*@:1075*/
          return (_a);
        } else {
          return (_a);
          /*@:1078*/
        }
        break;
      case 'or':
        if ($489_trial = (_isArray(_a))) {
          var $475_list = _a,
            $474_key;
          if (undefined === $475_list) $475_list = [];
          var $476_length = $475_list.length;
          for ($474_key = 0; $474_key < $476_length; $474_key++) {
            $473_this = $475_list[$474_key];
            if ($472_trial = ($473_this)) {
              return ($473_this);;
            };
          }
          /*@:1083*/
          return (undefined);
        } else if ($490_trial = (_mustIterate(_a))) {
          return (function*(p) {
            {
              var $481_iter = $AI.iterator_op(_a);
              var $482_elem = $481_iter.next();
              if (!$482_elem.done)
                for (var $480_key = 0; !$482_elem.done; $482_elem = $481_iter.next()) {
                  $479_this = $482_elem.value;
                  if ($478_trial = ($479_this)) {
                    yield($479_this);;
                  };
                  $480_key++;
                }
              /*@:1088*/
              yield(undefined);
            }
          });
        } else if ($491_trial = (_isObject(_a))) {
          var $487_list = _a,
            $486_key = undefined;
          if (undefined === $487_list) $487_list = {};
          for ($486_key in $487_list) {
            $485_this = $487_list[$486_key];
            if ($484_trial = ($485_this)) {
              return ($485_this);;
            };
          }
          /*@:1092*/
          return (undefined);
        } else {
          return (_a);
          /*@:1095*/
        }
        break;
      default:
        throw new Error('SAI Runtime: unknown logical operator ' + _op + ' in sailib.l_op');
        /*@:1098*/
        break;
    }
  }
};
var $39g = prototype['xor_op'] || function() {};
var _xor_op = prototype['xor_op'] = function(p, _b) {
  var $493_this, $ = undefined,
    _a = p; {
    return (((_a) ? (((_b) ? (false) : (_a))) : (((_b) ? (_b) : (false)))));
    /*@:1108*/
  }
};
var $40g = prototype['min_op'] || function() {};
var _min_op = prototype['min_op'] = function(p, _b) {
  var $494_this, $ = undefined,
    _a = p; {
    return ((((_a < _b)) ? (_a) : (_b)));
    /*@:1117*/
  }
};
var $41g = prototype['max_op'] || function() {};
var _max_op = prototype['max_op'] = function(p, _b) {
  var $495_this, $ = undefined,
    _a = p; {
    return ((((_a > _b)) ? (_a) : (_b)));
    /*@:1126*/
  }
};
var $42g = prototype['compare_op'] || function() {};
var _compare_op = prototype['compare_op'] = function(p, _b) {
  var $496_this, $497_trial, $498_trial, $ = undefined,
    _a = p; {
    if ($497_trial = ((_a < _b))) {
      return ((0 - (1)));;
    }
    /*@:1137*/
    if ($498_trial = ((_a > _b))) {
      return (1);;
    }
    /*@:1138*/
    return (0);
    /*@:1139*/
  }
};
var $43g = prototype['keys_op'] || function() {};
var _keys_op = prototype['keys_op'] = function(p) {
  var $499_this, $500_counter, $501_stop, $502_step, $503_none, $504_this, $505_key, $506_iter, $507_elem, $508_none, $509_this, $510_key, $511_list, $512_none, $513_trial, $514_trial, $515_trial, $ = undefined,
    $_c, $_d, _a = p,
    _result; {
    _result = [];
    /*@:1148*/
    if ($513_trial = (_isArray(_a))) {
      var $500_counter = 0,
        $501_stop = _a.length,
        $502_step = 1;
      if ($502_step <= 0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");
      for (; $500_counter < $501_stop; $500_counter = $500_counter + $502_step) {
        _result.push($500_counter);;
      }
    } else if ($514_trial = (_mustIterate(_a))) {
      var $506_iter = $AI.iterator_op(_a);
      var $507_elem = $506_iter.next();
      if (!$507_elem.done)
        for (var $505_key = 0; !$507_elem.done; $507_elem = $506_iter.next()) {
          $504_this = $507_elem.value;
          _result.push($505_key);;
          $505_key++;
        }
    } else if ($515_trial = (_isObject(_a))) {
      var $511_list = _a,
        $510_key = undefined;
      if (undefined === $511_list) $511_list = {};
      for ($510_key in $511_list) {
        $509_this = $511_list[$510_key];
        _result.push($510_key);;
      }
    }
    /*@:1157*/
    return (_result);
    /*@:1158*/
  }
};
var $44g = prototype['count_op'] || function() {};
var _count_op = prototype['count_op'] = function(p) {
  var $516_this, $517_trial, $518_this, $519_key, $520_iter, $521_elem, $522_none, $523_trial, $524_this, $525_key, $526_list, $527_none, $528_trial, $529_trial, $ = undefined,
    _a = p,
    _i; {
    if ($517_trial = (_isArray(_a))) {
      return (_a.length);
    }
    /*@:1168*/
    _i = 0;
    /*@:1169*/
    if ($523_trial = (_mustIterate(_a))) {
      var $520_iter = $AI.iterator_op(_a);
      var $521_elem = $520_iter.next();
      if (!$521_elem.done)
        for (var $519_key = 0; !$521_elem.done; $521_elem = $520_iter.next()) {
          $518_this = $521_elem.value;
          _i = (_i || 0) + 1;;
          $519_key++;
        }
      /*@:1172*/
      return (_i);
    }
    /*@:1173*/
    if ($528_trial = (_isObject(_a))) {
      var $526_list = _a,
        $525_key = undefined;
      if (undefined === $526_list) $526_list = {};
      for ($525_key in $526_list) {
        $524_this = $526_list[$525_key];
        _i = (_i || 0) + 1;;
      }
      /*@:1176*/
      return (_i);
    }
    /*@:1177*/
    if ($529_trial = ((_a === undefined))) {
      return (0);
    }
    /*@:1179*/
    return (1);
    /*@:1180*/
  }
};
var $45g = prototype['values_op'] || function() {};
var _values_op = prototype['values_op'] = function(p) {
  var $530_this, $531_trial, $532_trial, $533_this, $534_key, $535_list, $536_none, $537_trial, $538_trial, $ = undefined,
    $_c, $_d, _a = p,
    _result; {
    if ($531_trial = (_isArray(_a))) {
      return ($AI.clone_op(_a));
    }
    /*@:1190*/
    if ($532_trial = (_mustIterate(_a))) {
      return (_collect_op(_a));
    }
    /*@:1192*/
    _result = [];
    /*@:1193*/
    if ($537_trial = (_isObject(_a))) {
      var $535_list = _a,
        $534_key = undefined;
      if (undefined === $535_list) $535_list = {};
      for ($534_key in $535_list) {
        $533_this = $535_list[$534_key];
        _result.push($533_this);;
      }
      /*@:1196*/
      return (_result);
    }
    /*@:1197*/
    if ($538_trial = ((undefined !== _a))) {
      _result.push(_a);
    }
    /*@:1199*/
    return (_result);
    /*@:1200*/
  }
};
var $46g = prototype['newerror'] || function() {};
var _newerror = prototype['newerror'] = function(p, _file, _parameters) {
  var $539_this, $540_this, $541_key, $542_list, $543_none, $ = undefined,
    _e, _line = p; {
    _e = new Error(_parameters.message, _file, _line);
    /*@:1209*/
    var $542_list = _parameters,
      $541_key = undefined;
    if (undefined === $542_list) $542_list = {};
    for ($541_key in $542_list) {
      $540_this = $542_list[$541_key];
      _e[$541_key] = $540_this;;
    }
    /*@:1211*/
    return (_e);
    /*@:1212*/
  }
};
var $47g = prototype['number_op'] || function() {};
var _number_op = prototype['number_op'] = function(p) {
  var $544_this, $ = undefined,
    _n, _x = p; {
    _n = parseFloat(_x);
    /*@:1221*/
    return (((isNaN(_n)) ? (0) : (_n)));
    /*@:1222*/
  }
};
var $48g = prototype['expects_op'] || function() {};
var _expects_op = prototype['expects_op'] = function(p, _prototype) {
  var $545_this, $546_trial, $547_trial, $548_trial, $549_trial, $550_trial, $551_key, $552_list, $553_none, $ = undefined,
    $_c, $_d, _name, _param, _params = p,
    _result, _tester, _type; {
    _result = [];
    /*@:1231*/
    _tester = function(p, _name, _type) {
      var _param = p; {
        if ($547_trial = ((_type === typeof(_param)))) {;
        } else if ($548_trial = ((_param.isof && _param.isof[_type]))) {;
        } else {
          if ($546_trial = (_param.isa)) {
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
            /*@:1242*/
          }
        }
      }
    };
    /*@:1243*/
    var $552_list = _prototype,
      $551_key = undefined;
    if (undefined === $552_list) $552_list = {};
    for ($551_key in $552_list) {
      _type = $552_list[$551_key];
      if ($549_trial = (($551_key === '_root'))) {
        _tester(_params, 'Root', _type);
      } else if (!(_params.hasOwnProperty($551_key))) {
        _result.push({
          trait: $551_key,
          'expects': _type,
          found: 'missing'
        });
      } else if ($550_trial = ((_type !== true))) {
        _tester(_params[$551_key], $551_key, _type);
        /*@:1250*/
      };
    }
    /*@:1251*/
    return (_result);
    /*@:1252*/
  }
};
var $49g = prototype['expectsThrow'] || function() {};
var _expectsThrow = prototype['expectsThrow'] = function(p, _prototype, _name) {
  var $554_this, $555_this, $556_key, $557_list, $558_none, $ = undefined,
    $_c, $_d, _err, _params = p,
    _x; {
    _x = _expects_op(_params, _prototype);
    /*@:1261*/
    if (!(_x.length)) {
      return;;
    }
    /*@:1262*/
    _err = [];
    /*@:1263*/
    var $557_list = _x,
      $556_key = undefined;
    if (undefined === $557_list) $557_list = {};
    for ($556_key in $557_list) {
      $555_this = $557_list[$556_key];
      _err.push('' + $555_this.trait + ' should be ' + ((($555_this.expects === 'true')) ? ('existence') : ($555_this.expects)) + ' but is instead ' + $555_this.found);;
    }
    /*@:1265*/
    throw new Error('SAI: parameter exception in ' + _name + '\n' + _err.join('\n'));
    /*@:1266*/
  }
};
var $50g = prototype['finalizePrototype'] || function() {};
var _finalizePrototype = prototype['finalizePrototype'] = function(p) {
  var $559_this, $560_this, $561_key, $562_list, $563_none, $564_this, $565_key, $566_list, $567_none, $568_this, $569_key, $570_list, $571_none, $572_trial, $573_trial, $574_trial, $ = undefined,
    $_c, $_d, _obj, _proto = p; {
    var $562_list = _proto.__tobelocked,
      $561_key = undefined;
    if (undefined === $562_list) $562_list = {};
    for ($561_key in $562_list) {
      $560_this = $562_list[$561_key];
      Object.defineProperty(_proto, $560_this, {
        configurable: false
      });;
    }
    /*@:1279*/
    delete _proto.__tobelocked;
    /*@:1280*/
    var $566_list = _proto.__tobefrozen,
      $565_key = undefined;
    if (undefined === $566_list) $566_list = {};
    for ($565_key in $566_list) {
      $564_this = $566_list[$565_key];
      _deepFreeze(_proto[$564_this]);;
    }
    /*@:1283*/
    delete _proto.__tobefrozen;
    /*@:1284*/
    if ($572_trial = (_proto.__unverified)) {
      var $570_list = _proto.__contracts,
        $569_key = undefined;
      if (undefined === $570_list) $570_list = {};
      for ($569_key in $570_list) {
        $568_this = $570_list[$569_key];
        if (!(_proto.hasOwnProperty($568_this))) {
          throw new Error('SAI: Contractually required trait ' + $568_this + ' does not exist in object ' + _proto.isa + '.');
        };
      }
      /*@:1289*/
      delete _proto.__unverified;
      /*@:1290*/
      delete _proto.__contracts;
      /*@:1291*/
    }
    /*@:1292*/
    _proto.constructor = function(p) {
      {
        _obj = Object.create(_proto);
        /*@:1294*/
        if ($573_trial = (_obj.Constructor)) {
          _obj.Constructor();;
        }
        /*@:1295*/
        if ($574_trial = (_obj.Instantiate)) {
          _obj.Instantiate.apply(_obj, arguments);;
        }
        /*@:1296*/
        return (_obj);
        /*@:1297*/
      }
    };
  }
};
var $51g = prototype['create_op_base'] || function() {};
prototype['create_op_base'] = function(p, _parameters) {
  var $575_this, $576_trial, $577_trial, $578_trial, $ = this['create_op_base'] ? this : $bindfail('create_op_base'),
    $_c, $_d, _fn, _mod, _name = p,
    _obj, _proto, _src; {
    _proto = $._protocache[_name];
    /*@:1307*/
    if (!(_proto)) {
      _fn = (_name + '.js');
      /*@:1309*/
      _src = _FS.readFileSync(_fn, 'utf8');
      /*@:1310*/
      if ($576_trial = ($AI.slice_op(('#!' === _src), 0, 2))) {
        _src = _src.replace(/\#\![^\r\n\u0085\u2028\u2029]+/, '');
      }
      /*@:1312*/
      _src = '(function(exports, require, module, __filename, __dirname) {' + _src + '});';
      /*@:1313*/
      _mod = eval(_src);
      /*@:1314*/
      _proto = _mod({}, require, {}, _fn, __dirname);
      /*@:1315*/
      $._protocache[_name] = _proto;
      /*@:1316*/
    }
    /*@:1317*/
    if (!(_proto)) {
      throw new Error('SAI.Create: Do not know how to create SAI object ' + _name + '.');
      /*@:1319*/
    }
    /*@:1320*/
    _obj = Object.create(_proto);
    /*@:1321*/
    if ($577_trial = (_obj.Constructor)) {
      _obj.Constructor();;
    }
    /*@:1322*/
    if ($578_trial = (_obj.Instantiate)) {
      _obj.Instantiate.apply(_obj, _parameters);;
    }
    /*@:1323*/
    return (_obj);
    /*@:1324*/
  }
};
var $52g = prototype['singleton_op'] || function() {};
prototype['singleton_op'] = function(p, _parameters) {
  var $579_this, $ = this['singleton_op'] ? this : $bindfail('singleton_op'),
    $_c, $_d, _name = p; {
    if (undefined === $._singletoncache[_name]) $._singletoncache[_name] = $.create_op(_name, _parameters);
    /*@:1333*/
    return ($._singletoncache[_name]);
    /*@:1334*/
  }
};
var $53g = prototype['environment_base'] || function() {};
prototype['environment_base'] = function(p) {
  var $580_this, $ = this['environment_base'] ? this : $bindfail('environment_base'); {
    return ({
      dynamic: false,
      static: true
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
