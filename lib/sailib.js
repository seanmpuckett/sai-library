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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/sailib.sai","mtime":"2018-03-27T22:19:04.655Z","fetched":"2018-03-27T22:19:17.575Z"};
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
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "canIterate", "mustIterate", "isObject", "isArray", "isString", "isMergable", "isCollection", "coverage", "assert", "debug_op", "iterator_op", "iterate_op", "kviterate_op", "collect_op", "drain_op", "sort_op", "enlist_op", "entrait_op", "alter_op", "observe_op", "audit_op", "concat_op", "map_op", "filter_op", "reduce_op_fast", "reduce_op", "slice_op", "element_op", "clone_op", "overlay_op", "select_op", "update_op", "delete_op", "deepFreeze", "l_op", "xor_op", "min_op", "max_op", "compare_op", "keys_op", "count_op", "values_op", "newerror", "number_op", "expects_op", "expectsThrow", "finalizePrototype", "create_op_base", "singleton_op", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
var $1g = function() {
  var $ = this;
  return {
    debugFunction: console.log,
    _protocache: {},
    _singletoncache: {},
    _coveragecache: {},
    serial_number: undefined,
    create_op: undefined
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
    /*@:31*/
    _GLOBAL.instance = (_GLOBAL.instance || 0) + 1;
    /*@:32*/
    $.serial_number = _GLOBAL.instance;
    /*@:33*/
    $.create_op = $.create_op_base;
    /*@:35*/
  }
};
var $4g = prototype['canIterate'] || function() {};
var _canIterate = prototype['canIterate'] = function(p) {
  var $1_this, $2_trial, $3_trial, $4_trial, $ = undefined,
    _i = p; {
    if (!(_i)) {
      return (false);
    }
    /*@:45*/
    if ($2_trial = (_i[Symbol.iterator])) {
      return (true);
    }
    /*@:47*/
    if ($3_trial = (('function' === typeof(_i)))) {
      return (true);
    }
    /*@:49*/
    if ($4_trial = (('function' === typeof(_i.next)))) {
      return (true);
    }
    /*@:51*/
    return (false);
    /*@:52*/
  }
};
var $5g = prototype['mustIterate'] || function() {};
var _mustIterate = prototype['mustIterate'] = function(p) {
  var $5_this, $6_trial, $7_trial, $ = undefined,
    _i = p; {
    if (!(_i)) {
      return (false);
    }
    /*@:62*/
    if ($6_trial = (('function' === typeof(_i.next)))) {
      return (true);
    }
    /*@:64*/
    if ($7_trial = (('function' === typeof(_i)))) {
      return (true);
    }
    /*@:66*/
    return (false);
    /*@:67*/
  }
};
var $6g = prototype['isObject'] || function() {};
var _isObject = prototype['isObject'] = function(p) {
  var $10_trial, $8_this, $9_trial, $ = undefined,
    _i = p; {
    if ($9_trial = ((_i === null))) {
      return (false);
    }
    /*@:77*/
    if ($10_trial = (('object' === typeof(_i)))) {
      return (true);
    }
    /*@:79*/
    return (false);
    /*@:80*/
  }
};
var $7g = prototype['isArray'] || function() {};
var _isArray = prototype['isArray'] = function(p) {
  var $11_this, $ = undefined,
    $_c, $_d, _i = p; {
    return (Array.isArray(_i));
    /*@:89*/
  }
};
var $8g = prototype['isString'] || function() {};
var _isString = prototype['isString'] = function(p) {
  var $12_this, $ = undefined,
    _i = p; {
    return (('string' === typeof(_i)));
    /*@:98*/
  }
};
var $9g = prototype['isMergable'] || function() {};
var _isMergable = prototype['isMergable'] = function(p) {
  var $13_this, $ = undefined,
    _i = p; {
    return ((_isArray(_i) || (_isObject(_i) || _canIterate(_i))));
    /*@:107*/
  }
};
var $10g = prototype['isCollection'] || function() {};
var _isCollection = prototype['isCollection'] = function(p) {
  var $14_this, $ = undefined,
    _i = p; {
    return ((_isArray(_i) || _isObject(_i)));
    /*@:116*/
  }
};
var $11g = prototype['coverage'] || function() {};
prototype['coverage'] = function(p, _description) {
  var $15_this, $16_this, $ = this['coverage'] ? this : $bindfail('coverage'),
    $_c, $_d, _test = p; {
    var $16_this = '' + _description + ' - ' + _test;
    if (!($._coveragecache[$16_this])) {
      $AI.debug_op('Covered ' + $16_this);
      /*@:126*/
      $._coveragecache[$16_this] = true;
      /*@:127*/
    };
  }
};
var $12g = prototype['assert'] || function() {};
var _assert = prototype['assert'] = function(p, _txt) {
  var $17_this, $ = undefined,
    _msg, _test = p; {
    if (!(_test)) {
      _msg = ('SAI: failed assertion ' + _txt);
      /*@:137*/
      throw new Error(_msg);
    }
    /*@:138*/
    return (_test);
    /*@:139*/
  }
};
var $13g = prototype['debug_op'] || function() {};
prototype['debug_op'] = function(p) {
  var $18_this, $19_trial, $20_trial, $21_error, $ = this['debug_op'] ? this : $bindfail('debug_op'),
    $_c, $_d, _o = p; {
    try {
      if (undefined === _o) _o = 'undefined';
      /*@:149*/
      if ($19_trial = (('function' === typeof(_o.next)))) {
        _o = '{possible iterator via .next}';
      } else if ($20_trial = (('function' === typeof(_o)))) {
        _o = '{function}';
      }
      /*@:153*/
      $.debugFunction(_o);
    } catch ($21_error) {
      $.debugFunction('SAILib.debug exception: ' + $21_error.message);
      /*@:156*/
      $.debugFunction(_o);
      /*@:157*/
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
    /*@:169*/
    if ($23_trial = (('function' === typeof(_i.next)))) {
      return (_i);
    }
    /*@:171*/
    if ($24_trial = (('function' === typeof(_i)))) {
      return (_i());
    }
    /*@:173*/
    if ($25_trial = (_i[Symbol.iterator])) {
      return (_i[Symbol.iterator]());
    }
    /*@:175*/
    return (_i);
    /*@:176*/
  }
};
var $15g = prototype['iterate_op'] || function() {};
var _iterate_op = prototype['iterate_op'] = function(p) {
  var $26_this, $27_trial, $28_trial, $29_trial, $30_this, $31_key, $32_list, $33_length, $34_none, $35_trial, $36_this, $37_key, $38_list, $39_none, $40_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($27_trial = ((undefined === _a))) {
      return (_a);
    }
    /*@:186*/
    if ($28_trial = (_mustIterate(_a))) {
      return (_iterator_op(_a));
    }
    /*@:188*/
    if ($29_trial = (_a[Symbol.iterator])) {
      return (_a[Symbol.iterator]());
    }
    /*@:190*/
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
    /*@:194*/
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
    /*@:198*/
    return (function*(p) {
      {
        yield(_a);
        /*@:200*/
      }
    }());
  }
};
var $16g = prototype['kviterate_op'] || function() {};
var _kviterate_op = prototype['kviterate_op'] = function(p) {
  var $41_this, $42_this, $43_key, $44_iter, $45_elem, $46_none, $47_trial, $48_this, $49_key, $50_iter, $51_elem, $52_none, $53_trial, $54_this, $55_key, $56_list, $57_length, $58_none, $59_trial, $60_this, $61_key, $62_list, $63_none, $64_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if (!(_a)) {
      return (function*(p) {
        {;
        }
      }());
    }
    /*@:213*/
    if ($47_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $44_iter = $AI.iterator_op(_a);
          var $45_elem = $44_iter.next();
          if (!$45_elem.done)
            for (var $43_key = 0; !$45_elem.done; $45_elem = $44_iter.next()) {
              $42_this = $45_elem.value;
              yield([$43_key, $42_this]);;
              $43_key++;
            }
        }
      }());
    }
    /*@:217*/
    if ($53_trial = (_a[Symbol.iterator])) {
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
    /*@:221*/
    if ($59_trial = (_isArray(_a))) {
      return (function*(p) {
        {
          var $56_list = _a,
            $55_key;
          if (undefined === $56_list) $56_list = [];
          var $57_length = $56_list.length;
          for ($55_key = 0; $55_key < $57_length; $55_key++) {
            $54_this = $56_list[$55_key];
            yield([$55_key, $54_this]);;
          }
        }
      }());
    }
    /*@:225*/
    if ($64_trial = (_isObject(_a))) {
      return (function*(p) {
        {
          var $62_list = _a,
            $61_key = undefined;
          if (undefined === $62_list) $62_list = {};
          for ($61_key in $62_list) {
            $60_this = $62_list[$61_key];
            yield([$61_key, $60_this]);;
          }
        }
      }());
    }
    /*@:229*/
    return (function*(p) {
      {
        yield([0, _a]);
        /*@:231*/
      }
    }());
  }
};
var $17g = prototype['collect_op'] || function() {};
var _collect_op = prototype['collect_op'] = function(p) {
  var $65_this, $66_trial, $67_this, $68_key, $69_iter, $70_elem, $71_none, $ = undefined,
    $_c, $_d, _a, _i = p; {
    if ($66_trial = ((undefined === _i))) {
      return (_i);
    }
    /*@:242*/
    if (!(_mustIterate(_i))) {
      return (_i);
      /*@:244*/
    }
    /*@:245*/
    _a = [];
    /*@:246*/
    var $69_iter = $AI.iterator_op(_i);
    var $70_elem = $69_iter.next();
    if (!$70_elem.done)
      for (var $68_key = 0; !$70_elem.done; $70_elem = $69_iter.next()) {
        $67_this = $70_elem.value;
        _a.push($67_this);;
        $68_key++;
      }
    /*@:248*/
    return (_a);
    /*@:249*/
  }
};
var $18g = prototype['drain_op'] || function() {};
var _drain_op = prototype['drain_op'] = function(p) {
  var $72_this, $73_trial, $74_this, $75_key, $76_iter, $77_elem, $78_none, $ = undefined,
    _i = p; {
    if ($73_trial = ((undefined === _i))) {
      return (_i);
    }
    /*@:259*/
    if (!(_mustIterate(_i))) {
      return (_i);
      /*@:261*/
    }
    /*@:262*/
    var $76_iter = $AI.iterator_op(_i);
    var $77_elem = $76_iter.next();
    if (!$77_elem.done)
      for (var $75_key = 0; !$77_elem.done; $77_elem = $76_iter.next()) {
        $74_this = $77_elem.value;; /*@:264*/ ;
        $75_key++;
      }
  }
};
var $19g = prototype['sort_op'] || function() {};
var _sort_op = prototype['sort_op'] = function(p, _fn) {
  var $79_this, $80_trial, $81_trial, $82_trial, $ = undefined,
    _a = p; {
    if ($80_trial = (_isArray(_a))) {
      return (_a.slice(0).sort(_fn));
    }
    /*@:274*/
    if ($81_trial = (_mustIterate(_a))) {
      return (_collect_op(_a).sort(_fn));
    }
    /*@:276*/
    if ($82_trial = (_isObject(_a))) {
      return (_values_op(_a).sort(_fn));
    }
    /*@:278*/
    return (_a);
    /*@:279*/
  }
};
var $20g = prototype['enlist_op'] || function() {};
var _enlist_op = prototype['enlist_op'] = function(p) {
  var $83_this, $84_trial, $85_trial, $86_this, $87_key, $88_iter, $89_elem, $90_none, $91_this, $92_key, $93_list, $94_none, $95_trial, $96_trial, $ = undefined,
    $_c, $_d, _a = p,
    _out; {
    if ($84_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:295*/
    if ($85_trial = (_isArray(_a))) {
      return (_a);;
    }
    /*@:296*/
    _out = [];
    /*@:298*/
    if ($95_trial = (_mustIterate(_a))) {
      var $88_iter = $AI.iterator_op(_a);
      var $89_elem = $88_iter.next();
      if (!$89_elem.done)
        for (var $87_key = 0; !$89_elem.done; $89_elem = $88_iter.next()) {
          $86_this = $89_elem.value;
          _out.push($86_this);;
          $87_key++;
        }
    } else if ($96_trial = (_isObject(_a))) {
      var $93_list = _a,
        $92_key = undefined;
      if (undefined === $93_list) $93_list = {};
      for ($92_key in $93_list) {
        $91_this = $93_list[$92_key];
        _out.push([$92_key, $91_this]);;
      }
    } else {
      _out.push(_a);
    }
    /*@:306*/
    return (_out);
    /*@:307*/
  }
};
var $21g = prototype['entrait_op'] || function() {};
var _entrait_op = prototype['entrait_op'] = function(p) {
  var $100_this, $101_key, $102_iter, $103_elem, $104_none, $105_this, $106_key, $107_list, $108_length, $109_none, $110_trial, $111_trial, $112_trial, $97_this, $98_trial, $99_trial, $ = undefined,
    $_c, $_d, _a = p,
    _assign, _k, _out, _v; {
    if ($98_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:323*/
    _out = [];
    /*@:325*/
    _assign = function(p, _v) {
      var _k = p; {
        if ($99_trial = (((_k !== undefined) && (_v !== undefined)))) {
          _out[_k] = _v;
          /*@:328*/
        }
      }
    };
    /*@:329*/
    if ($110_trial = (_mustIterate(_a))) {
      var $102_iter = $AI.iterator_op(_a);
      var $103_elem = $102_iter.next();
      if (!$103_elem.done)
        for (var $101_key = 0; !$103_elem.done; $103_elem = $102_iter.next()) {
          $100_this = $103_elem.value;
          _assign($100_this[0], $100_this[1]);;
          $101_key++;
        }
    } else if ($111_trial = (_isArray(_a))) {
      var $107_list = _a,
        $106_key;
      if (undefined === $107_list) $107_list = [];
      var $108_length = $107_list.length;
      for ($106_key = 0; $106_key < $108_length; $106_key++) {
        $105_this = $107_list[$106_key];
        _assign($105_this[0], $105_this[1]);;
      }
    } else if ($112_trial = (_isObject(_a))) {
      return (_a);
    } else {
      _out[_a] = true;
      /*@:339*/
    }
    /*@:340*/
    return (_out);
    /*@:341*/
  }
};
var $22g = prototype['alter_op'] || function() {};
var _alter_op = prototype['alter_op'] = function(p, _fn) {
  var $113_this, $ = undefined,
    _a = p; {
    return (_fn(_a));
    /*@:350*/
  }
};
var $23g = prototype['observe_op'] || function() {};
var _observe_op = prototype['observe_op'] = function(p, _fn) {
  var $114_this, $ = undefined,
    $_c, $_d, _a = p; {
    _fn(_a);
    /*@:359*/
    return (_a);
    /*@:360*/
  }
};
var $24g = prototype['audit_op'] || function() {};
var _audit_op = prototype['audit_op'] = function(p, _fn) {
  var $115_this, $116_this, $117_key, $118_list, $119_length, $120_none, $121_this, $122_key, $123_iter, $124_elem, $125_none, $126_this, $127_key, $128_list, $129_none, $130_trial, $131_trial, $132_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($130_trial = (_isArray(_a))) {
      var $118_list = _a,
        $117_key;
      if (undefined === $118_list) $118_list = [];
      var $119_length = $118_list.length;
      for ($117_key = 0; $117_key < $119_length; $117_key++) {
        $116_this = $118_list[$117_key];
        _fn($116_this, $117_key);;
      }
    } else if ($131_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $123_iter = $AI.iterator_op(_a);
          var $124_elem = $123_iter.next();
          if (!$124_elem.done)
            for (var $122_key = 0; !$124_elem.done; $124_elem = $123_iter.next()) {
              $121_this = $124_elem.value;
              _fn($121_this, $122_key);
              /*@:377*/
              yield($121_this);;
              $122_key++;
            }
        }
      }());
    } else if ($132_trial = (_isObject(_a))) {
      var $128_list = _a,
        $127_key = undefined;
      if (undefined === $128_list) $128_list = {};
      for ($127_key in $128_list) {
        $126_this = $128_list[$127_key];
        _fn($126_this, $127_key);;
      }
    }
    /*@:381*/
    return (_a);
    /*@:382*/
  }
};
var $25g = prototype['concat_op'] || function() {};
var _concat_op = prototype['concat_op'] = function(p, _b, _inplace) {
  var $133_this, $134_trial, $135_trial, $136_trial, $137_trial, $138_trial, $139_this, $140_key, $141_iter, $142_elem, $143_none, $144_this, $145_key, $146_iter, $147_elem, $148_none, $149_trial, $150_this, $151_key, $152_iter, $153_elem, $154_none, $155_this, $156_key, $157_list, $158_length, $159_none, $160_trial, $161_this, $162_key, $163_iter, $164_elem, $165_none, $166_trial, $167_trial, $168_this, $169_key, $170_iter, $171_elem, $172_none, $173_trial, $174_trial, $ = undefined,
    $_c, $_d, _a = p; {
    if ($136_trial = ((undefined === _a))) {
      if ($134_trial = ((undefined === _b))) {
        return (undefined);;
      }
      /*@:414*/
      if ($135_trial = ((_isArray(_b) || _mustIterate(_b)))) {
        return (_b);;
      }
      /*@:415*/
      return ([_b]);
      /*@:416*/
    }
    /*@:417*/
    if ($138_trial = ((undefined === _b))) {
      if ($137_trial = ((_isArray(_a) || _mustIterate(_a)))) {
        return (_a);;
      }
      /*@:419*/
      return ([_a]);
      /*@:420*/
    }
    /*@:421*/
    if ($166_trial = (_mustIterate(_a))) {
      if ($149_trial = (_mustIterate(_b))) {
        return (function*(p) {
          {
            var $141_iter = $AI.iterator_op(_a);
            var $142_elem = $141_iter.next();
            if (!$142_elem.done)
              for (var $140_key = 0; !$142_elem.done; $142_elem = $141_iter.next()) {
                $139_this = $142_elem.value;
                yield($139_this);;;
                $140_key++;
              }
            /*@:425*/
            var $146_iter = $AI.iterator_op(_b);
            var $147_elem = $146_iter.next();
            if (!$147_elem.done)
              for (var $145_key = 0; !$147_elem.done; $147_elem = $146_iter.next()) {
                $144_this = $147_elem.value;
                yield($144_this);;;
                $145_key++;
              }
            /*@:426*/
          }
        }());
      }
      /*@:427*/
      if ($160_trial = (_isArray(_b))) {
        _b = $AI.clone_op(_b);
        /*@:429*/
        return (function*(p) {
          {
            var $152_iter = $AI.iterator_op(_a);
            var $153_elem = $152_iter.next();
            if (!$153_elem.done)
              for (var $151_key = 0; !$153_elem.done; $153_elem = $152_iter.next()) {
                $150_this = $153_elem.value;
                yield($150_this);;;
                $151_key++;
              }
            /*@:431*/
            var $157_list = _b,
              $156_key;
            if (undefined === $157_list) $157_list = [];
            var $158_length = $157_list.length;
            for ($156_key = 0; $156_key < $158_length; $156_key++) {
              $155_this = $157_list[$156_key];
              yield($155_this);;;
            }
            /*@:432*/
          }
        }());
      }
      /*@:433*/
      return (function*(p) {
        {
          var $163_iter = $AI.iterator_op(_a);
          var $164_elem = $163_iter.next();
          if (!$164_elem.done)
            for (var $162_key = 0; !$164_elem.done; $164_elem = $163_iter.next()) {
              $161_this = $164_elem.value;
              yield($161_this);;;
              $162_key++;
            }
          /*@:435*/
          yield(_b);
          /*@:436*/
        }
      }());
    }
    /*@:437*/
    if ($167_trial = ((!(_isArray(_a))))) {
      _a = [_a];
    } else if (!(_inplace)) {
      _a = $AI.clone_op(_a);
      /*@:441*/
    }
    /*@:442*/
    if ($173_trial = (_mustIterate(_b))) {
      var $170_iter = $AI.iterator_op(_b);
      var $171_elem = $170_iter.next();
      if (!$171_elem.done)
        for (var $169_key = 0; !$171_elem.done; $171_elem = $170_iter.next()) {
          $168_this = $171_elem.value;
          _a.push($168_this);;;
          $169_key++;
        }
    } else if ($174_trial = (_isArray(_b))) {
      _a = _a.concat(_b);
    } else {
      _a.push(_b);
      /*@:448*/
    }
    /*@:449*/
    return (_a);
    /*@:450*/
  }
};
var $26g = prototype['map_op'] || function() {};
var _map_op = prototype['map_op'] = function(p, _fn) {
  var $175_this, $176_trial, $177_this, $178_key, $179_list, $180_length, $181_none, $182_trial, $183_this, $184_key, $185_iter, $186_elem, $187_none, $188_trial, $189_this, $190_key, $191_list, $192_none, $193_trial, $ = undefined,
    $_c, $_d, _a = p,
    _r; {
    if ($176_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:461*/
    if ($182_trial = (_isArray(_a))) {
      _r = [];
      /*@:464*/
      var $179_list = _a,
        $178_key;
      if (undefined === $179_list) $179_list = [];
      var $180_length = $179_list.length;
      for ($178_key = 0; $178_key < $180_length; $178_key++) {
        $177_this = $179_list[$178_key];
        _r[$178_key] = _fn($177_this, $178_key);;;
      }
      /*@:465*/
      return (_r);
      /*@:466*/
    }
    /*@:467*/
    if ($188_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $185_iter = $AI.iterator_op(_a);
          var $186_elem = $185_iter.next();
          if (!$186_elem.done)
            for (var $184_key = 0; !$186_elem.done; $186_elem = $185_iter.next()) {
              $183_this = $186_elem.value;
              yield(_fn($183_this, $184_key));;;
              $184_key++;
            }
          /*@:470*/
        }
      }());
    }
    /*@:471*/
    if ($193_trial = (_isObject(_a))) {
      _r = {};
      /*@:473*/
      var $191_list = _a,
        $190_key = undefined;
      if (undefined === $191_list) $191_list = {};
      for ($190_key in $191_list) {
        $189_this = $191_list[$190_key];
        _r[$190_key] = _fn($189_this, $190_key);;;
      }
      /*@:474*/
      return (_r);
      /*@:475*/
    }
    /*@:476*/
    return (_fn(_a, undefined));
    /*@:477*/
  }
};
var $27g = prototype['filter_op'] || function() {};
var _filter_op = prototype['filter_op'] = function(p, _fn) {
  var $194_this, $195_trial, $196_trial, $197_this, $198_key, $199_list, $200_length, $201_none, $202_trial, $203_trial, $204_this, $205_key, $206_iter, $207_elem, $208_none, $209_trial, $210_trial, $211_this, $212_key, $213_list, $214_none, $215_trial, $ = undefined,
    $_c, $_d, _a = p,
    _r; {
    if ($195_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:489*/
    if ($202_trial = (_isArray(_a))) {
      _r = [];
      /*@:492*/
      var $199_list = _a,
        $198_key;
      if (undefined === $199_list) $199_list = [];
      var $200_length = $199_list.length;
      for ($198_key = 0; $198_key < $200_length; $198_key++) {
        $197_this = $199_list[$198_key];
        if ($196_trial = (_fn($197_this, $198_key))) {
          _r.push($197_this);;
        };;
      }
      /*@:493*/
      return (_r);
      /*@:494*/
    }
    /*@:495*/
    if ($209_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          var $206_iter = $AI.iterator_op(_a);
          var $207_elem = $206_iter.next();
          if (!$207_elem.done)
            for (var $205_key = 0; !$207_elem.done; $207_elem = $206_iter.next()) {
              $204_this = $207_elem.value;
              if ($203_trial = (_fn($204_this, $205_key))) {
                yield($204_this);;
              };;
              $205_key++;
            }
          /*@:498*/
        }
      }());
    }
    /*@:499*/
    if ($215_trial = (_isObject(_a))) {
      _r = {};
      /*@:501*/
      var $213_list = _a,
        $212_key = undefined;
      if (undefined === $213_list) $213_list = {};
      for ($212_key in $213_list) {
        $211_this = $213_list[$212_key];
        if ($210_trial = (_fn($211_this, $212_key))) {
          _r[$212_key] = $211_this;;
        };;
      }
      /*@:502*/
      return (_r);
      /*@:503*/
    }
    /*@:504*/
    return (((_fn(_a, undefined)) ? (_a) : (undefined)));
    /*@:505*/
  }
};
var $28g = prototype['reduce_op_fast'] || function() {};
var _reduce_op_fast = prototype['reduce_op_fast'] = function(p, _fn, _accum) {
  var $216_this, $217_trial, $218_this, $219_trial, $220_trial, $221_this, $222_key, $223_list, $224_none, $225_trial, $ = undefined,
    $_c, $_d, _a = p,
    _k, _l, _step; {
    if ($217_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:517*/
    if ($219_trial = (_isArray(_a))) {
      _l = _a.length;
      /*@:520*/
      if (!(_l)) {
        return (_accum);;
      }
      /*@:521*/
      _k = 0;
      /*@:522*/
      var $218_this;
      while ($218_this = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        /*@:524*/
        _k = (_k || 0) + 1;
      }
      /*@:525*/
      return (_accum);
      /*@:526*/
    }
    /*@:527*/
    if ($220_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          _a = $AI.iterate_op(_a);
          /*@:530*/
          _step = _a.next();
          /*@:531*/
          if (!(_step.done)) {
            _k = 0;
            /*@:533*/
            while (!(_step.done)) {
              _accum = _fn(_accum, _step.value, _k);
              /*@:535*/
              _step = _a.next();
              /*@:536*/
              _k = (_k || 0) + 1;
            }
          }
          /*@:537*/
          yield(_accum);
          /*@:538*/
        }
      }());
    }
    /*@:539*/
    if ($225_trial = (_isObject(_a))) {
      var $223_list = _a,
        $222_key = undefined;
      if (undefined === $223_list) $223_list = {};
      for ($222_key in $223_list) {
        $221_this = $223_list[$222_key];
        _accum = _fn(_accum, $221_this, $222_key);
        /*@:542*/
        ;
      }
      /*@:543*/
      return (_accum);
      /*@:544*/
    }
    /*@:546*/
    return (_reduce_op([_a], _fn, _accum));
    /*@:547*/
  }
};
var $29g = prototype['reduce_op'] || function() {};
var _reduce_op = prototype['reduce_op'] = function(p, _fn, _accum) {
  var $226_this, $227_trial, $228_trial, $229_this, $230_trial, $231, $232_trial, $233_trial, $234_trial, $235_this, $236_key, $237_list, $238_none, $239_trial, $ = undefined,
    $_c, $_d, _a = p,
    _init, _k, _l, _step; {
    if ($227_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:559*/
    if ($230_trial = (_isArray(_a))) {
      _l = _a.length;
      /*@:562*/
      if (!(_l)) {
        return (_accum);;
      }
      /*@:563*/
      _k = 0;
      /*@:564*/
      if ($228_trial = ((undefined === _accum))) {
        _accum = _a[_k];
        /*@:566*/
        _k = (_k || 0) + 1;
      }
      /*@:567*/
      var $229_this;
      while ($229_this = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        /*@:569*/
        _k = (_k || 0) + 1;
      }
      /*@:570*/
      return (_accum);
      /*@:571*/
    }
    /*@:572*/
    if ($233_trial = (_mustIterate(_a))) {
      return (function*(p) {
        {
          $231 = _a;
          _a = $AI.iterate_op($231);
          /*@:575*/
          _step = _a.next();
          /*@:576*/
          if (!(_step.done)) {
            _k = 0;
            /*@:578*/
            if ($232_trial = ((undefined === _accum))) {
              _accum = _step.value;
              /*@:580*/
              _step = _a.next();
              /*@:581*/
              _k = (_k || 0) + 1;
            }
            /*@:582*/
            while (!(_step.done)) {
              _accum = _fn(_accum, _step.value, _k);
              /*@:584*/
              _step = _a.next();
              /*@:585*/
              _k = (_k || 0) + 1;
            }
          }
          /*@:586*/
          yield(_accum);
          /*@:587*/
        }
      }());
    }
    /*@:588*/
    if ($239_trial = (_isObject(_a))) {
      _init = (undefined === _accum);
      /*@:590*/
      var $237_list = _a,
        $236_key = undefined;
      if (undefined === $237_list) $237_list = {};
      for ($236_key in $237_list) {
        $235_this = $237_list[$236_key];
        if ($234_trial = (_init)) {
          _accum = $235_this;
          /*@:593*/
          _init = false;
        } else {
          _accum = _fn(_accum, $235_this, $236_key);
          /*@:596*/
        };
      }
      /*@:597*/
      return (_accum);
      /*@:598*/
    }
    /*@:600*/
    return (_reduce_op([_a], _fn, _accum));
    /*@:601*/
  }
};
var $30g = prototype['slice_op'] || function() {};
var _slice_op = prototype['slice_op'] = function(p, _st, _ct) {
  var $240_this, $241_trial, $242_trial, $243_trial, $244_trial, $245_trial, $246_trial, $247_trial, $248_trial, $249_trial, $250_trial, $251_trial, $252_trial, $253_trial, $254_trial, $255_trial, $256_trial, $257_trial, $258_trial, $259_this, $260_key, $261_iter, $262_elem, $263_none, $264_trial, $265_trial, $266_trial, $267_trial, $268_trial, $269_trial, $270_trial, $271_trial, $272_trial, $273_trial, $274_trial, $275_trial, $276_trial, $277_trial, $278_trial, $279_trial, $280_trial, $281_trial, $282, $283_trial, $284_trial, $285_this, $286_trial, $287_this, $ = undefined,
    $_c, $_d, _a = p,
    _cache, _crop, _keep, _len, _only, _size, _skip, _v; {
    if ($241_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:634*/
    if ($253_trial = (_isString(_a))) {
      if ($242_trial = ((_ct === 0))) {
        return ('');
      }
      /*@:638*/
      if ($243_trial = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
        return (_a);
      }
      /*@:640*/
      if ($244_trial = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
        return (_a.substring(0, _ct));
      }
      /*@:642*/
      _len = _a.length;
      /*@:643*/
      if ($249_trial = (((undefined === _st) && (_ct < 0)))) {
        return (_a.substring((_len + _ct), _len));
      } else if ($250_trial = (((0 === _st) && (_ct < 0)))) {
        return (_a.substring(0, (_len + _ct)));
      } else if ($251_trial = ((_st > 0))) {
        if ($245_trial = ((_ct < 0))) {
          return (_a.substring(_st, (_len + _ct)));
        } else if ($246_trial = ((_ct > 0))) {
          return (_a.substring(_st, (_st + _ct)));
        } else {
          return (_a.substring(_st, _len));
        }
      } else if ($252_trial = ((_st < 0))) {
        if ($247_trial = ((_ct < 0))) {
          return (_a.substring((_len + _st), (_len + _ct)));
        } else if ($248_trial = ((_ct > 0))) {
          return (_a.substring((_len + _st), (_len + (_st + _ct))));
        } else {
          return (_a.substring((_len + _st), _len));
        }
      }
      /*@:661*/
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
      /*@:662*/
    }
    /*@:664*/
    if ($255_trial = ((_ct === 0))) {
      if ($254_trial = (_mustIterate(_a))) {
        return (function*(p) {
          {;;
          }
        });
      } else {
        return ([]);
        /*@:669*/
      }
    }
    /*@:671*/
    if (!((_mustIterate(_a) || _isArray(_a)))) {
      _a = [_a];
      /*@:673*/
    }
    /*@:675*/
    if ($257_trial = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
      if ($256_trial = (_isArray(_a))) {
        return ($AI.clone_op(_a));
      } else {
        return (_a);
        /*@:680*/
      }
    }
    /*@:682*/
    if ($265_trial = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
      if ($264_trial = (_isArray(_a))) {
        return (_a.slice(0, _ct));
      } else {
        return (function*(p) {
          {
            var $261_iter = $AI.iterator_op(_a);
            var $262_elem = $261_iter.next();
            if (!$262_elem.done)
              for (var $260_key = 0; !$262_elem.done; $262_elem = $261_iter.next()) {
                $259_this = $262_elem.value;
                if ($258_trial = (($260_key < _ct))) {
                  yield($259_this);;
                } else {
                  break;;
                }
                /*@:690*/
                ;
                $260_key++;
              }
          }
        }());
      }
    }
    /*@:691*/
    if ($274_trial = (_isArray(_a))) {
      _len = _a.length;
      /*@:693*/
      if ($270_trial = (((undefined === _st) && (_ct < 0)))) {
        return (_a.slice((_len + _ct), _len));
      } else if ($271_trial = (((0 === _st) && (_ct < 0)))) {
        return (_a.slice(0, (_len + _ct)));
      } else if ($272_trial = ((_st > 0))) {
        if ($266_trial = ((_ct < 0))) {
          return (_a.slice(_st, (_len + _ct)));
        } else if ($267_trial = ((_ct > 0))) {
          return (_a.slice(_st, (_st + _ct)));
        } else {
          return (_a.slice(_st, _len));
        }
      } else if ($273_trial = ((_st < 0))) {
        if ($268_trial = ((_ct < 0))) {
          return (_a.slice((_len + _st), (_len + _ct)));
        } else if ($269_trial = ((_ct > 0))) {
          return (_a.slice((_len + _st), (_len + (_st + _ct))));
        } else {
          return (_a.slice((_len + _st), _len));
        }
      }
      /*@:711*/
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
      /*@:712*/
    }
    /*@:714*/
    _skip = 0;
    _crop = 0;
    _size = 0;
    _only = undefined;
    _keep = true;
    /*@:721*/
    if ($279_trial = (((undefined === _st) && (_ct < 0)))) {
      _keep = false;
      /*@:723*/
      _size = (0 - (_ct));
    } else if ($280_trial = ((_st < 0))) {
      _keep = false;
      /*@:726*/
      _size = (0 - (_st));
      /*@:727*/
      if ($275_trial = ((_ct < 0))) {
        _crop = (0 - (_ct));
      } else if ($276_trial = ((_ct > 0))) {
        _crop = (_size - _ct);
      }
    } else if ($281_trial = ((_st > 0))) {
      _skip = _st;
      /*@:733*/
      if ($277_trial = ((_ct < 0))) {
        _size = (0 - (_ct));
        /*@:735*/
        _crop = (0 - (_ct));
      } else if ($278_trial = ((_ct > 0))) {
        _only = _ct;
      }
    } else {
      _size = (0 - (_ct));
      /*@:740*/
      _crop = (0 - (_ct));
      /*@:741*/
    }
    /*@:742*/
    $282 = _a;
    _a = $AI.iterate_op($282);
    /*@:743*/
    return (function*(p) {
      {
        _cache = [];
        /*@:746*/
        _v = _a.next();
        /*@:747*/
        while (!(((_skip <= 0) || _v.done))) {
          _skip--;
          /*@:749*/
          _v = _a.next();
        }
        /*@:750*/
        while (!(_v.done)) {
          _cache.push(_v.value);
          /*@:752*/
          if ($286_trial = ((_cache.length > _size))) {
            var $285_this = _cache.shift();
            if ($284_trial = (_keep)) {
              if ($283_trial = ((_only <= 0))) {
                return;;
              }
              /*@:756*/
              _only--;
              /*@:757*/
              yield($285_this);
            };
          }
          /*@:758*/
          _v = _a.next();
        }
        /*@:759*/
        var $287_this;
        while ($287_this = ((_cache.length > _crop))) {
          yield(_cache.shift());
          /*@:761*/
        }
      }
    }());
  }
};
var $31g = prototype['element_op'] || function() {};
var _element_op = prototype['element_op'] = function(p, _index) {
  var $288_this, $289_trial, $290_trial, $291_trial, $292_trial, $ = undefined,
    _a = p; {
    if ($289_trial = ((undefined === _a))) {
      return (_a);;
    }
    /*@:770*/
    if ($290_trial = (_isArray(_a))) {
      return (_a[_index]);
    }
    /*@:772*/
    if ($291_trial = (_mustIterate(_a))) {
      return (_slice_op(_a, _index, 1).next().value);
    }
    /*@:774*/
    if ($292_trial = (((_index === 0) || (_index === (0 - (1)))))) {
      return (_a);
    }
    /*@:776*/
    return (undefined);
    /*@:777*/
  }
};
var $32g = prototype['clone_op'] || function() {};
var _clone_op = prototype['clone_op'] = function(p) {
  var $293_this, $294_trial, $295_this, $296_key, $297_list, $298_none, $299_trial, $ = undefined,
    _a = p,
    _b; {
    if ($294_trial = (_isArray(_a))) {
      return (_a.slice(0));
    }
    /*@:787*/
    if ($299_trial = (_isObject(_a))) {
      _b = {};
      /*@:789*/
      var $297_list = _a,
        $296_key = undefined;
      if (undefined === $297_list) $297_list = {};
      for ($296_key in $297_list) {
        $295_this = $297_list[$296_key];
        _b[$296_key] = $295_this;;
      }
      /*@:791*/
      return (_b);
    }
    /*@:792*/
    return (_a);
    /*@:793*/
  }
};
var $33g = prototype['overlay_op'] || function() {};
var _overlay_op = prototype['overlay_op'] = function(p, _r) {
  var $300_this, $301_trial, $302_trial, $303_trial, $304_this, $305_key, $306_iter, $307_elem, $308_none, $309_this, $310_this, $311_key, $312_iter, $313_elem, $314_none, $315_trial, $316_trial, $317_trial, $318_this, $319_key, $320_list, $321_none, $322_trial, $323_this, $324_key, $325_list, $326_length, $327_none, $328_trial, $329, $330, $331_trial, $ = undefined,
    $_b, $_c, $_d, _i, _l = p,
    _v, _vl, _vr; {
    if ($301_trial = ((undefined === _l))) {
      _l = {};
      /*@:807*/
    }
    /*@:808*/
    if ($302_trial = ((!(_isMergable(_l))))) {
      throw new Error('SAI: Attempt to OVERLAY onto something that\'s not a collection/iterable.');
    }
    /*@:810*/
    if ($303_trial = ((!(_isMergable(_r))))) {
      throw new Error('SAI: Attempt to OVERLAY with something that\'s not a collection/iterable.');
      /*@:812*/
    }
    /*@:813*/
    if (!(_mustIterate(_l))) {
      _l = $AI.clone_op(_l);
      /*@:815*/
      if ($316_trial = (_mustIterate(_r))) {
        if ($315_trial = (_isArray(_l))) {
          return (function*(p) {
            {
              var $306_iter = $AI.iterator_op(_r);
              var $307_elem = $306_iter.next();
              if (!$307_elem.done)
                for (var $305_key = 0; !$307_elem.done; $307_elem = $306_iter.next()) {
                  $304_this = $307_elem.value;
                  yield(((undefined !== ($_b = $304_this)) ? $_b : _l[$305_key]));;
                  $305_key++;
                }
            }
          }());
        } else {
          var $312_iter = $AI.iterator_op(_r);
          var $313_elem = $312_iter.next();
          if (!$313_elem.done)
            for (var $311_key = 0; !$313_elem.done; $313_elem = $312_iter.next()) {
              $310_this = $313_elem.value;
              if (undefined !== ($309_this = ($310_this))) {
                _l[$311_key] = $309_this;
              };
              $311_key++;
            }
          /*@:824*/
          return (_l);
          /*@:825*/
        }
      }
      /*@:826*/
      if ($328_trial = (_isObject(_r))) {
        var $320_list = _r,
          $319_key = undefined;
        if (undefined === $320_list) $320_list = {};
        for ($319_key in $320_list) {
          $318_this = $320_list[$319_key];
          if ($317_trial = (($318_this !== undefined))) {
            _l[$319_key] = $318_this;
          };
        }
      } else {
        var $325_list = _r,
          $324_key;
        if (undefined === $325_list) $325_list = [];
        var $326_length = $325_list.length;
        for ($324_key = 0; $324_key < $326_length; $324_key++) {
          $323_this = $325_list[$324_key];
          if ($322_trial = (($323_this !== undefined))) {
            _l[$324_key] = $323_this;
          };
        }
      }
      /*@:834*/
      return (_l);
      /*@:835*/
    }
    /*@:836*/
    $329 = _l;
    _l = $AI.iterate_op($329);
    /*@:837*/
    if ($331_trial = (_mustIterate(_r))) {
      $330 = _r;
      _r = $AI.iterate_op($330);
      /*@:839*/
      return (function*(p) {
        {
          _vl = _l.next();
          /*@:841*/
          _vr = _r.next();
          /*@:842*/
          while (!(_vr.done)) {
            yield((((_vr.value === undefined)) ? (_vl.value) : (_vr.value)));
            /*@:844*/
            _vl = _l.next();
            /*@:845*/
            _vr = _r.next();
          }
          /*@:846*/
          yield*(_l);
          /*@:847*/
        }
      }());
    }
    /*@:848*/
    _r = $AI.clone_op(_r);
    /*@:849*/
    return (function*(p) {
      {
        _i = 0;
        /*@:851*/
        _v = _l.next();
        /*@:852*/
        while (!(_v.done)) {
          yield((((_r[_i] === undefined)) ? (_v.value) : (_r[_i])));
          /*@:854*/
          _i = (_i || 0) + 1;
          /*@:855*/
          _v = _l.next();
          /*@:856*/
        }
      }
    }());
  }
};
var $34g = prototype['select_op'] || function() {};
var _select_op = prototype['select_op'] = function(p, _manifest) {
  var $332_this, $333_trial, $334_this, $335_key, $336_list, $337_length, $338_none, $339_this, $340_key, $341_iter, $342_elem, $343_none, $344_trial, $345_trial, $346_this, $347_key, $348_list, $349_none, $350, $351_this, $352_this, $353_key, $354_iter, $355_elem, $356_none, $357_trial, $358, $359_this, $360_this, $361_key, $362_list, $363_length, $364_none, $365_trial, $366_this, $367_key, $368_trial, $369_trial, $370_this, $371_key, $372_iter, $373_elem, $374_none, $375_trial, $376_trial, $377_trial, $378_this, $379_key, $380_iter, $381_elem, $382_none, $383_trial, $384_this, $385_key, $386_list, $387_length, $388_none, $389_trial, $390_this, $391_key, $392_list, $393_none, $394_trial, $ = undefined,
    $_c, $_d, _buffer, _i, _l, _result, _src = p; {
    if (!(_isMergable(_src))) {
      throw new Error('SAI: Left argument to SELECT must be list/traits/iterable.');
      /*@:869*/
    }
    /*@:870*/
    if (!(_isMergable(_manifest))) {
      if ($333_trial = ((undefined === _manifest))) {
        return (_manifest);;
      }
      /*@:872*/
      _manifest = [_manifest];
      /*@:873*/
    }
    /*@:874*/
    if ($375_trial = (_isArray(_src))) {
      if ($344_trial = (_isArray(_manifest))) {
        _result = [];
        /*@:877*/
        var $336_list = _manifest,
          $335_key;
        if (undefined === $336_list) $336_list = [];
        var $337_length = $336_list.length;
        for ($335_key = 0; $335_key < $337_length; $335_key++) {
          $334_this = $336_list[$335_key];
          _result.push(_src[$334_this]);;
        }
        /*@:879*/
        return (_result);
        /*@:880*/
      } else if ($345_trial = (_mustIterate(_manifest))) {
        _src = $AI.clone_op(_src);
        /*@:883*/
        return (function*(p) {
          {
            var $341_iter = $AI.iterator_op(_manifest);
            var $342_elem = $341_iter.next();
            if (!$342_elem.done)
              for (var $340_key = 0; !$342_elem.done; $342_elem = $341_iter.next()) {
                $339_this = $342_elem.value;
                yield(_src[$339_this]);
                /*@:886*/
                ;
                $340_key++;
              }
          }
        }());
      }
      /*@:887*/
      _result = [];
      /*@:888*/
      var $348_list = _manifest,
        $347_key = undefined;
      if (undefined === $348_list) $348_list = {};
      for ($347_key in $348_list) {
        $346_this = $348_list[$347_key];
        _result.push(_src[$347_key]);;
      }
      /*@:890*/
      return (_result);
      /*@:891*/
    } else if ($376_trial = (_mustIterate(_src))) {
      if ($357_trial = (_mustIterate(_manifest))) {
        $350 = _src;
        _src = $AI.iterate_op($350);
        /*@:895*/
        return (function*(p) {
          {
            _l = _src.next();
            /*@:897*/
            _buffer = [];
            /*@:898*/
            var $354_iter = $AI.iterator_op(_manifest);
            var $355_elem = $354_iter.next();
            if (!$355_elem.done)
              for (var $353_key = 0; !$355_elem.done; $355_elem = $354_iter.next()) {
                $352_this = $355_elem.value;
                var $351_this;
                while ($351_this = (((!(_l.done)) && (_buffer.length <= $352_this)))) {
                  _buffer.push(_l.value);
                  /*@:901*/
                  _l = _src.next();
                }
                /*@:902*/
                yield(_buffer[$352_this]);
                /*@:903*/
                ;
                $353_key++;
              }
          }
        }());
      }
      /*@:904*/
      if ($365_trial = (_isArray(_manifest))) {
        _manifest = $AI.clone_op(_manifest);
        /*@:906*/
        $358 = _src;
        _src = $AI.iterate_op($358);
        /*@:907*/
        return (function*(p) {
          {
            _l = _src.next();
            /*@:909*/
            _buffer = [];
            /*@:910*/
            var $362_list = _manifest,
              $361_key;
            if (undefined === $362_list) $362_list = [];
            var $363_length = $362_list.length;
            for ($361_key = 0; $361_key < $363_length; $361_key++) {
              $360_this = $362_list[$361_key];
              var $359_this;
              while ($359_this = (((!(_l.done)) && (_buffer.length <= $360_this)))) {
                _buffer.push(_l.value);
                /*@:913*/
                _l = _src.next();
              }
              /*@:914*/
              yield(_buffer[$360_this]);
              /*@:915*/
              ;
            }
          }
        }());
      }
      /*@:916*/
      _manifest = $AI.sort_op($AI.map_op($AI.keys_op(_manifest), function($366_this, $367_key) {
        return ($AI.number_op($366_this));
      }), function(a, b) {
        var aa, bb;
        aa = a;
        bb = b;
        if (aa < bb) return -1;
        if (aa > bb) return 1;;
        return 0;
      });
      /*@:917*/
      return (function*(p) {
        {
          _i = 0;
          /*@:919*/
          var $372_iter = $AI.iterator_op(_src);
          var $373_elem = $372_iter.next();
          if (!$373_elem.done)
            for (var $371_key = 0; !$373_elem.done; $373_elem = $372_iter.next()) {
              $370_this = $373_elem.value;
              if ($369_trial = (($371_key === _manifest[_i]))) {
                yield($370_this);
                /*@:922*/
                _i = (_i || 0) + 1;
                /*@:923*/
                if ($368_trial = ((_i >= _manifest.length))) {
                  return;;
                }
                /*@:924*/
              };
              $371_key++;
            }
        }
      }());
    }
    /*@:925*/
    if ($383_trial = (_mustIterate(_manifest))) {
      _src = $AI.clone_op(_src);
      /*@:927*/
      return (function*(p) {
        {
          var $380_iter = $AI.iterator_op(_manifest);
          var $381_elem = $380_iter.next();
          if (!$381_elem.done)
            for (var $379_key = 0; !$381_elem.done; $381_elem = $380_iter.next()) {
              $378_this = $381_elem.value;
              if ($377_trial = (($378_this !== undefined))) {
                yield(_src[$378_this]);
                /*@:931*/
              };
              $379_key++;
            }
        }
      }());
    }
    /*@:932*/
    _result = {};
    /*@:933*/
    if ($389_trial = (_isArray(_manifest))) {
      var $386_list = _manifest,
        $385_key;
      if (undefined === $386_list) $386_list = [];
      var $387_length = $386_list.length;
      for ($385_key = 0; $385_key < $387_length; $385_key++) {
        $384_this = $386_list[$385_key];
        _result[$384_this] = _src[$384_this];;
      }
      /*@:936*/
      return (_result);
      /*@:937*/
    }
    /*@:938*/
    if ($394_trial = (_isObject(_manifest))) {
      var $392_list = _manifest,
        $391_key = undefined;
      if (undefined === $392_list) $392_list = {};
      for ($391_key in $392_list) {
        $390_this = $392_list[$391_key];
        _result[$391_key] = _src[$391_key];
        /*@:941*/
        ;
      }
    } else {
      _result[_manifest] = _src[_manifest];
      /*@:944*/
    }
    /*@:945*/
    return (_result);
    /*@:946*/
  }
};
var $35g = prototype['update_op'] || function() {};
var _update_op = prototype['update_op'] = function(p, _manifest) {
  var $395_this, $396_trial, $397_trial, $398_this, $399_key, $400_iter, $401_elem, $402_none, $403_trial, $404_this, $405_key, $406_list, $407_length, $408_none, $409_trial, $410_this, $411_key, $412_list, $413_none, $414_trial, $415_trial, $ = undefined,
    _dest = p; {
    if ($396_trial = ((undefined === _dest))) {
      _dest = {};
      /*@:959*/
    }
    /*@:960*/
    if (!((_isArray(_dest) || _isObject(_dest)))) {
      throw new Error('Attempt to UPDATE into something that\'s not a list or traits.');
      /*@:962*/
    }
    /*@:963*/
    if (!(_isMergable(_manifest))) {
      throw new Error('Attempt to UPDATE from something that\'s not a list or traits.');
      /*@:965*/
    }
    /*@:966*/
    if ($414_trial = (_mustIterate(_manifest))) {
      var $400_iter = $AI.iterator_op(_manifest);
      var $401_elem = $400_iter.next();
      if (!$401_elem.done)
        for (var $399_key = 0; !$401_elem.done; $401_elem = $400_iter.next()) {
          $398_this = $401_elem.value;
          if ($397_trial = (($398_this !== undefined))) {
            _dest[$399_key] = $398_this;;
          }
          /*@:969*/
          ;
          $399_key++;
        }
    } else if ($415_trial = (_isArray(_manifest))) {
      var $406_list = _manifest,
        $405_key;
      if (undefined === $406_list) $406_list = [];
      var $407_length = $406_list.length;
      for ($405_key = 0; $405_key < $407_length; $405_key++) {
        $404_this = $406_list[$405_key];
        if ($403_trial = (($404_this !== undefined))) {
          _dest[$405_key] = $404_this;;
        }
        /*@:973*/
        ;
      }
    } else {
      var $412_list = _manifest,
        $411_key = undefined;
      if (undefined === $412_list) $412_list = {};
      for ($411_key in $412_list) {
        $410_this = $412_list[$411_key];
        if ($409_trial = (($410_this !== undefined))) {
          _dest[$411_key] = $410_this;;
        }
        /*@:977*/
        ;
      }
    }
    /*@:978*/
    return (_dest);
    /*@:979*/
  }
};
var $36g = prototype['delete_op'] || function() {};
var _delete_op = prototype['delete_op'] = function(p, _manifest, _clone) {
  var $416_this, $417_trial, $418_trial, $419_key, $420_list, $421_length, $422_none, $423_key, $424_iter, $425_elem, $426_none, $427_this, $428_key, $429_list, $430_none, $431_trial, $432_trial, $433_key, $434_list, $435_length, $436_none, $437_key, $438_iter, $439_elem, $440_none, $441_key, $442_list, $443_none, $444_trial, $445_trial, $446_trial, $447_trial, $ = undefined,
    $_c, $_d, _deletel, _deleter, _dest = p,
    _ignore, _index, _splicer; {
    if ($417_trial = (_mustIterate(_dest))) {
      throw new Error('SAI: Attempt to DELETE from an iterator, which is not presently supported.');
    }
    /*@:993*/
    if (!(_isObject(_dest))) {
      throw new Error('SAI: Attempt to DELETE from something that\'s not a list or traits.');
      /*@:995*/
    }
    /*@:996*/
    if ($418_trial = (_clone)) {
      _dest = $AI.clone_op(_dest);
      /*@:998*/
    }
    /*@:999*/
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
          /*@:1009*/
        }
      }
    };
    /*@:1010*/
    if ($447_trial = (_isArray(_dest))) {
      if (!(_isMergable(_manifest))) {
        _splicer(_manifest);
      } else if ($431_trial = (_isArray(_manifest))) {
        var $420_list = _manifest,
          $419_key;
        if (undefined === $420_list) $420_list = [];
        var $421_length = $420_list.length;
        for ($419_key = 0; $419_key < $421_length; $419_key++) {
          _splicer($420_list[$419_key], $419_key, $420_list);
        }
      } else if ($432_trial = (_mustIterate(_manifest))) {
        var $424_iter = $AI.iterator_op(_manifest);
        var $425_elem = $424_iter.next();
        var $423_key = 0;
        if (!$425_elem.done)
          do {
            _splicer($425_elem.value, $423_key);
            $423_key++;
            $425_elem = $424_iter.next();
          } while (!$425_elem.done);
      } else {
        var $429_list = _manifest,
          $428_key = undefined;
        if (undefined === $429_list) $429_list = {};
        for ($428_key in $429_list) {
          $427_this = $429_list[$428_key];
          let _index = parseInt($428_key);
          /*@:1020*/
          if (!(isNaN(_index))) {
            _dest.splice(_index, 1);
            /*@:1022*/
          };
        }
      }
    } else {
      if (!(_isMergable(_manifest))) {
        delete _dest[_manifest];
      } else if ($444_trial = (_isArray(_manifest))) {
        var $434_list = _manifest,
          $433_key;
        if (undefined === $434_list) $434_list = [];
        var $435_length = $434_list.length;
        for ($433_key = 0; $433_key < $435_length; $433_key++) {
          _deletel($434_list[$433_key], $433_key, $434_list);
        }
      } else if ($445_trial = (_mustIterate(_manifest))) {
        var $438_iter = $AI.iterator_op(_manifest);
        var $439_elem = $438_iter.next();
        var $437_key = 0;
        if (!$439_elem.done)
          do {
            _deletel($439_elem.value, $437_key);
            $437_key++;
            $439_elem = $438_iter.next();
          } while (!$439_elem.done);
      } else if ($446_trial = (_isObject(_manifest))) {
        var $442_list = _manifest,
          $441_key = undefined;
        if (undefined === $442_list) $442_list = {};
        for ($441_key in $442_list) {
          _deleter($442_list[$441_key], $441_key, $442_list);
        }
      } else {
        delete _dest[_manifest];
        /*@:1034*/
      }
    }
    /*@:1035*/
    return (_dest);
    /*@:1036*/
  }
};
var $37g = prototype['deepFreeze'] || function() {};
var _deepFreeze = prototype['deepFreeze'] = function(p) {
  var $448_this, $449_trial, $450_trial, $451_trial, $452_this, $453_key, $454_list, $455_none, $ = undefined,
    $_c, $_d, _o = p; {
    Object.freeze(_o);
    /*@:1045*/
    var $454_list = _o,
      $453_key = undefined;
    if (undefined === $454_list) $454_list = {};
    for ($453_key in $454_list) {
      $452_this = $454_list[$453_key];
      if ($449_trial = ((!(_o.hasOwnProperty($453_key))))) {
        continue;;
      }
      /*@:1047*/
      if ($450_trial = (('object' !== typeof($452_this)))) {
        continue;;
      }
      /*@:1048*/
      if ($451_trial = (Object.isFrozen($452_this))) {
        continue;;
      }
      /*@:1049*/
      _deepFreeze($452_this);
      /*@:1050*/
      ;
    }
  }
};
var $38g = prototype['l_op'] || function() {};
var _l_op = prototype['l_op'] = function(p, _a) {
  var $456_this, $457_this, $458_key, $459_list, $460_length, $461_this, $462_key, $463_iter, $464_elem, $465_this, $466_key, $467_list, $468_trial, $469_trial, $470_trial, $471_trial, $472_this, $473_key, $474_list, $475_length, $476_none, $477_trial, $478_this, $479_key, $480_iter, $481_elem, $482_none, $483_trial, $484_this, $485_key, $486_list, $487_none, $488_trial, $489_trial, $490_trial, $491, $ = undefined,
    _op = p; {
    switch ($491 = (_op)) {
      case 'and':
        if ($468_trial = (_isArray(_a))) {
          var $459_list = _a,
            $458_key;
          if (undefined === $459_list) $459_list = [];
          var $460_length = $459_list.length;
          for ($458_key = 0; $458_key < $460_length; $458_key++) {
            $457_this = $459_list[$458_key];
            if (!($457_this)) {
              return ($457_this);;
            };
          }
          if ($458_key === 0) {
            return (undefined);
          }
          /*@:1065*/
          return (_a);
        } else if ($469_trial = (_mustIterate(_a))) {
          return (function*(p) {
            {
              var $463_iter = $AI.iterator_op(_a);
              var $464_elem = $463_iter.next();
              if ($464_elem.done) {
                yield(undefined);
              } else
                for (var $462_key = 0; !$464_elem.done; $464_elem = $463_iter.next()) {
                  $461_this = $464_elem.value;
                  if (!($461_this)) {
                    yield($461_this);;
                  };
                  $462_key++;
                }
              /*@:1072*/
              yield(true);
            }
          });
        } else if ($470_trial = (_isObject(_a))) {
          var $467_list = _a,
            $466_key = undefined;
          if (undefined === $467_list) $467_list = {};
          for ($466_key in $467_list) {
            $465_this = $467_list[$466_key];
            if (!($465_this)) {
              return ($465_this);;
            };
          }
          if ($466_key === undefined) {
            return (undefined);
          }
          /*@:1078*/
          return (_a);
        } else {
          return (_a);
          /*@:1081*/
        }
        break;
      case 'or':
        if ($488_trial = (_isArray(_a))) {
          var $474_list = _a,
            $473_key;
          if (undefined === $474_list) $474_list = [];
          var $475_length = $474_list.length;
          for ($473_key = 0; $473_key < $475_length; $473_key++) {
            $472_this = $474_list[$473_key];
            if ($471_trial = ($472_this)) {
              return ($472_this);;
            };
          }
          /*@:1086*/
          return (undefined);
        } else if ($489_trial = (_mustIterate(_a))) {
          return (function*(p) {
            {
              var $480_iter = $AI.iterator_op(_a);
              var $481_elem = $480_iter.next();
              if (!$481_elem.done)
                for (var $479_key = 0; !$481_elem.done; $481_elem = $480_iter.next()) {
                  $478_this = $481_elem.value;
                  if ($477_trial = ($478_this)) {
                    yield($478_this);;
                  };
                  $479_key++;
                }
              /*@:1091*/
              yield(undefined);
            }
          });
        } else if ($490_trial = (_isObject(_a))) {
          var $486_list = _a,
            $485_key = undefined;
          if (undefined === $486_list) $486_list = {};
          for ($485_key in $486_list) {
            $484_this = $486_list[$485_key];
            if ($483_trial = ($484_this)) {
              return ($484_this);;
            };
          }
          /*@:1095*/
          return (undefined);
        } else {
          return (_a);
          /*@:1098*/
        }
        break;
      default:
        throw new Error('SAI Runtime: unknown logical operator ' + _op + ' in sailib.l_op');
        /*@:1101*/
        break;
    }
  }
};
var $39g = prototype['xor_op'] || function() {};
var _xor_op = prototype['xor_op'] = function(p, _b) {
  var $492_this, $ = undefined,
    _a = p; {
    return (((_a) ? (((_b) ? (false) : (_a))) : (((_b) ? (_b) : (false)))));
    /*@:1111*/
  }
};
var $40g = prototype['min_op'] || function() {};
var _min_op = prototype['min_op'] = function(p, _b) {
  var $493_this, $ = undefined,
    _a = p; {
    return ((((_a < _b)) ? (_a) : (_b)));
    /*@:1120*/
  }
};
var $41g = prototype['max_op'] || function() {};
var _max_op = prototype['max_op'] = function(p, _b) {
  var $494_this, $ = undefined,
    _a = p; {
    return ((((_a > _b)) ? (_a) : (_b)));
    /*@:1129*/
  }
};
var $42g = prototype['compare_op'] || function() {};
var _compare_op = prototype['compare_op'] = function(p, _b) {
  var $495_this, $496_trial, $497_trial, $ = undefined,
    _a = p; {
    if ($496_trial = ((_a < _b))) {
      return ((0 - (1)));;
    }
    /*@:1140*/
    if ($497_trial = ((_a > _b))) {
      return (1);;
    }
    /*@:1141*/
    return (0);
    /*@:1142*/
  }
};
var $43g = prototype['keys_op'] || function() {};
var _keys_op = prototype['keys_op'] = function(p) {
  var $498_this, $499_counter, $500_stop, $501_step, $502_none, $503_this, $504_key, $505_iter, $506_elem, $507_none, $508_this, $509_key, $510_list, $511_none, $512_trial, $513_trial, $514_trial, $ = undefined,
    $_c, $_d, _a = p,
    _result; {
    _result = [];
    /*@:1151*/
    if ($512_trial = (_isArray(_a))) {
      var $499_counter = 0,
        $500_stop = _a.length,
        $501_step = 1;
      if ($501_step <= 0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");
      for (; $499_counter < $500_stop; $499_counter = $499_counter + $501_step) {
        _result.push($499_counter);;
      }
    } else if ($513_trial = (_mustIterate(_a))) {
      var $505_iter = $AI.iterator_op(_a);
      var $506_elem = $505_iter.next();
      if (!$506_elem.done)
        for (var $504_key = 0; !$506_elem.done; $506_elem = $505_iter.next()) {
          $503_this = $506_elem.value;
          _result.push($504_key);;
          $504_key++;
        }
    } else if ($514_trial = (_isObject(_a))) {
      var $510_list = _a,
        $509_key = undefined;
      if (undefined === $510_list) $510_list = {};
      for ($509_key in $510_list) {
        $508_this = $510_list[$509_key];
        _result.push($509_key);;
      }
    }
    /*@:1160*/
    return (_result);
    /*@:1161*/
  }
};
var $44g = prototype['count_op'] || function() {};
var _count_op = prototype['count_op'] = function(p) {
  var $515_this, $516_trial, $517_this, $518_key, $519_iter, $520_elem, $521_none, $522_trial, $523_this, $524_key, $525_list, $526_none, $527_trial, $528_trial, $ = undefined,
    _a = p,
    _i; {
    if ($516_trial = (_isArray(_a))) {
      return (_a.length);
    }
    /*@:1171*/
    _i = 0;
    /*@:1172*/
    if ($522_trial = (_mustIterate(_a))) {
      var $519_iter = $AI.iterator_op(_a);
      var $520_elem = $519_iter.next();
      if (!$520_elem.done)
        for (var $518_key = 0; !$520_elem.done; $520_elem = $519_iter.next()) {
          $517_this = $520_elem.value;
          _i = (_i || 0) + 1;;
          $518_key++;
        }
      /*@:1175*/
      return (_i);
    }
    /*@:1176*/
    if ($527_trial = (_isObject(_a))) {
      var $525_list = _a,
        $524_key = undefined;
      if (undefined === $525_list) $525_list = {};
      for ($524_key in $525_list) {
        $523_this = $525_list[$524_key];
        _i = (_i || 0) + 1;;
      }
      /*@:1179*/
      return (_i);
    }
    /*@:1180*/
    if ($528_trial = ((_a === undefined))) {
      return (0);
    }
    /*@:1182*/
    return (1);
    /*@:1183*/
  }
};
var $45g = prototype['values_op'] || function() {};
var _values_op = prototype['values_op'] = function(p) {
  var $529_this, $530_trial, $531_trial, $532_this, $533_key, $534_list, $535_none, $536_trial, $537_trial, $ = undefined,
    $_c, $_d, _a = p,
    _result; {
    if ($530_trial = (_isArray(_a))) {
      return ($AI.clone_op(_a));
    }
    /*@:1193*/
    if ($531_trial = (_mustIterate(_a))) {
      return (_collect_op(_a));
    }
    /*@:1195*/
    _result = [];
    /*@:1196*/
    if ($536_trial = (_isObject(_a))) {
      var $534_list = _a,
        $533_key = undefined;
      if (undefined === $534_list) $534_list = {};
      for ($533_key in $534_list) {
        $532_this = $534_list[$533_key];
        _result.push($532_this);;
      }
      /*@:1199*/
      return (_result);
    }
    /*@:1200*/
    if ($537_trial = ((undefined !== _a))) {
      _result.push(_a);
    }
    /*@:1202*/
    return (_result);
    /*@:1203*/
  }
};
var $46g = prototype['newerror'] || function() {};
var _newerror = prototype['newerror'] = function(p, _file, _parameters) {
  var $538_this, $539_this, $540_key, $541_list, $542_none, $ = undefined,
    _e, _line = p; {
    _e = new Error(_parameters.message, _file, _line);
    /*@:1212*/
    var $541_list = _parameters,
      $540_key = undefined;
    if (undefined === $541_list) $541_list = {};
    for ($540_key in $541_list) {
      $539_this = $541_list[$540_key];
      _e[$540_key] = $539_this;;
    }
    /*@:1214*/
    return (_e);
    /*@:1215*/
  }
};
var $47g = prototype['number_op'] || function() {};
var _number_op = prototype['number_op'] = function(p) {
  var $543_this, $ = undefined,
    _n, _x = p; {
    _n = parseFloat(_x);
    /*@:1224*/
    return (((isNaN(_n)) ? (0) : (_n)));
    /*@:1225*/
  }
};
var $48g = prototype['expects_op'] || function() {};
var _expects_op = prototype['expects_op'] = function(p, _prototype) {
  var $544_this, $545_trial, $546_trial, $547_trial, $548_trial, $549_trial, $550_key, $551_list, $552_none, $ = undefined,
    $_c, $_d, _name, _param, _params = p,
    _result, _tester, _type; {
    _result = [];
    /*@:1234*/
    _tester = function(p, _name, _type) {
      var _param = p; {
        if ($546_trial = ((_type === typeof(_param)))) {;
        } else if ($547_trial = ((_param.isof && _param.isof[_type]))) {;
        } else {
          if ($545_trial = (_param.isa)) {
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
            /*@:1245*/
          }
        }
      }
    };
    /*@:1246*/
    var $551_list = _prototype,
      $550_key = undefined;
    if (undefined === $551_list) $551_list = {};
    for ($550_key in $551_list) {
      _type = $551_list[$550_key];
      if ($548_trial = (($550_key === '_root'))) {
        _tester(_params, 'Root', _type);
      } else if (!(_params.hasOwnProperty($550_key))) {
        _result.push({
          trait: $550_key,
          'expects': _type,
          found: 'missing'
        });
      } else if ($549_trial = ((_type !== true))) {
        _tester(_params[$550_key], $550_key, _type);
        /*@:1253*/
      };
    }
    /*@:1254*/
    return (_result);
    /*@:1255*/
  }
};
var $49g = prototype['expectsThrow'] || function() {};
var _expectsThrow = prototype['expectsThrow'] = function(p, _prototype, _name) {
  var $553_this, $554_this, $555_key, $556_list, $557_none, $ = undefined,
    $_c, $_d, _err, _params = p,
    _x; {
    _x = _expects_op(_params, _prototype);
    /*@:1264*/
    if (!(_x.length)) {
      return;;
    }
    /*@:1265*/
    _err = [];
    /*@:1266*/
    var $556_list = _x,
      $555_key = undefined;
    if (undefined === $556_list) $556_list = {};
    for ($555_key in $556_list) {
      $554_this = $556_list[$555_key];
      _err.push('' + $554_this.trait + ' should be ' + ((($554_this.expects === 'true')) ? ('existence') : ($554_this.expects)) + ' but is instead ' + $554_this.found);;
    }
    /*@:1268*/
    throw new Error('SAI: parameter exception in ' + _name + '\n' + _err.join('\n'));
    /*@:1269*/
  }
};
var $50g = prototype['finalizePrototype'] || function() {};
var _finalizePrototype = prototype['finalizePrototype'] = function(p) {
  var $558_this, $559_this, $560_key, $561_list, $562_none, $563_this, $564_key, $565_list, $566_none, $567_this, $568_key, $569_list, $570_none, $571_trial, $572_trial, $573_trial, $ = undefined,
    $_c, $_d, _obj, _proto = p; {
    var $561_list = _proto.__tobelocked,
      $560_key = undefined;
    if (undefined === $561_list) $561_list = {};
    for ($560_key in $561_list) {
      $559_this = $561_list[$560_key];
      Object.defineProperty(_proto, $559_this, {
        configurable: false
      });;
    }
    /*@:1282*/
    delete _proto.__tobelocked;
    /*@:1283*/
    var $565_list = _proto.__tobefrozen,
      $564_key = undefined;
    if (undefined === $565_list) $565_list = {};
    for ($564_key in $565_list) {
      $563_this = $565_list[$564_key];
      _deepFreeze(_proto[$563_this]);;
    }
    /*@:1286*/
    delete _proto.__tobefrozen;
    /*@:1287*/
    if ($571_trial = (_proto.__unverified)) {
      var $569_list = _proto.__contracts,
        $568_key = undefined;
      if (undefined === $569_list) $569_list = {};
      for ($568_key in $569_list) {
        $567_this = $569_list[$568_key];
        if (!(_proto.hasOwnProperty($567_this))) {
          throw new Error('SAI: Contractually required trait ' + $567_this + ' does not exist in object ' + _proto.isa + '.');
        };
      }
      /*@:1292*/
      delete _proto.__unverified;
      /*@:1293*/
      delete _proto.__contracts;
      /*@:1294*/
    }
    /*@:1295*/
    _proto.constructor = function(p) {
      {
        _obj = Object.create(_proto);
        /*@:1297*/
        if ($572_trial = (_obj.Constructor)) {
          _obj.Constructor();;
        }
        /*@:1298*/
        if ($573_trial = (_obj.Instantiate)) {
          _obj.Instantiate.apply(_obj, arguments);;
        }
        /*@:1299*/
        return (_obj);
        /*@:1300*/
      }
    };
  }
};
var $51g = prototype['create_op_base'] || function() {};
prototype['create_op_base'] = function(p, _parameters) {
  var $574_this, $575_trial, $576_trial, $577_trial, $ = this['create_op_base'] ? this : $bindfail('create_op_base'),
    $_c, $_d, _fn, _mod, _name = p,
    _obj, _proto, _src; {
    _proto = $._protocache[_name];
    /*@:1310*/
    if (!(_proto)) {
      _fn = (_name + '.js');
      /*@:1312*/
      _src = _FS.readFileSync(_fn, 'utf8');
      /*@:1313*/
      if ($575_trial = ($AI.slice_op(('#!' === _src), 0, 2))) {
        _src = _src.replace(/\#\![^\r\n\u0085\u2028\u2029]+/, '');
      }
      /*@:1315*/
      _src = '(function(exports, require, module, __filename, __dirname) {' + _src + '});';
      /*@:1316*/
      _mod = eval(_src);
      /*@:1317*/
      _proto = _mod({}, require, {}, _fn, __dirname);
      /*@:1318*/
      $._protocache[_name] = _proto;
      /*@:1319*/
    }
    /*@:1320*/
    if (!(_proto)) {
      throw new Error('SAI.Create: Do not know how to create SAI object ' + _name + '.');
      /*@:1322*/
    }
    /*@:1323*/
    _obj = Object.create(_proto);
    /*@:1324*/
    if ($576_trial = (_obj.Constructor)) {
      _obj.Constructor();;
    }
    /*@:1325*/
    if ($577_trial = (_obj.Instantiate)) {
      _obj.Instantiate.apply(_obj, _parameters);;
    }
    /*@:1326*/
    return (_obj);
    /*@:1327*/
  }
};
var $52g = prototype['singleton_op'] || function() {};
prototype['singleton_op'] = function(p, _parameters) {
  var $578_this, $ = this['singleton_op'] ? this : $bindfail('singleton_op'),
    $_c, $_d, _name = p; {
    if (undefined === $._singletoncache[_name]) $._singletoncache[_name] = $.create_op(_name, _parameters);
    /*@:1336*/
    return ($._singletoncache[_name]);
    /*@:1337*/
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
