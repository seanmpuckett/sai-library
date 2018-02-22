#!/usr/bin/env node

// Javascript source for sailib transipled by SAI
//

"use strict";

var prototype=new function(){
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
var __context={"name":"sailib","loader":"SAI.GetSourceFromPaths","path":"src/sailib.sai","mtime":"2018-02-21T02:13:49.018Z","fetched":"2018-02-21T02:13:54.848Z"};
var _FS = require('fs');
var _GLOBAL = {
  instance: 0
};
var isa = prototype.isa = 'SAILib';
prototype.isof['SAILib'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["'Instantiate'", "'canIterate'", "'mustIterate'", "'isObject'", "'isArray'", "'isString'", "'isMergable'", "'isCollection'", "'coverage'", "'assert'", "'debug_op'", "'iterator_op'", "'iterate_op'", "'kviterate_op'", "'collect_op'", "'drain_op'", "'sort_op'", "'enlist_op'", "'entrait_op'", "'alter_op'", "'observe_op'", "'audit_op'", "'concat_op'", "'map_op'", "'filter_op'", "'reduce_op'", "'slice_op'", "'element_op'", "'clone_op'", "'overlay_op'", "'select_op'", "'update_op'", "'delete_op'", "'deepFreeze'", "'xor_op'", "'min_op'", "'max_op'", "'compare_op'", "'keys_op'", "'count_op'", "'values_op'", "'newerror'", "'number_op'", "'expects_op'", "'expectsThrow'", "'finalizePrototype'", "'create_op_base'", "'singleton_op'", "isa"]);
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
  var $_d, $_c, $0, $ = this; {
    if (($0 = ($.serial_number))) {
      $AI.debug_op('re-Instantiating over ' + $.serial_number);
    }
    _GLOBAL.instance = (_GLOBAL.instance || 0) + 1;
    $.serial_number = _GLOBAL.instance;
    $.create_op = $.create_op_base;
  }
};
var $4g = prototype['canIterate'] || function() {};
prototype['canIterate'] = function(p) {
  var $4, $3, $2, $1, _i = p,
    $ = this; {
    if (!(_i)) {
      return false;
    }
    if (($2 = (_i[Symbol.iterator]))) {
      return true;
    }
    if (($3 = (('function' === typeof(_i))))) {
      return true;
    }
    if (($4 = (('function' === typeof(_i.next))))) {
      return true;
    }
    return false;
  }
};
var $5g = prototype['mustIterate'] || function() {};
prototype['mustIterate'] = function(p) {
  var $7, $6, $5, _i = p,
    $ = this; {
    if (!(_i)) {
      return false;
    }
    if (($6 = (('function' === typeof(_i.next))))) {
      return true;
    }
    if (($7 = (('function' === typeof(_i))))) {
      return true;
    }
    return false;
  }
};
var $6g = prototype['isObject'] || function() {};
prototype['isObject'] = function(p) {
  var $10, $9, $8, _i = p,
    $ = this; {
    if (($9 = ((_i === null)))) {
      return false;
    }
    if (($10 = (('object' === typeof(_i))))) {
      return true;
    }
    return false;
  }
};
var $7g = prototype['isArray'] || function() {};
prototype['isArray'] = function(p) {
  var $_d, $_c, $11, _i = p,
    $ = this; {
    return Array.isArray(_i);
  }
};
var $8g = prototype['isString'] || function() {};
prototype['isString'] = function(p) {
  var $12, _i = p,
    $ = this; {
    return ('string' === typeof(_i));
  }
};
var $9g = prototype['isMergable'] || function() {};
prototype['isMergable'] = function(p) {
  var $13, _i = p,
    $ = this; {
    return ($.isArray(_i) || ($.isObject(_i) || $.canIterate(_i)));
  }
};
var $10g = prototype['isCollection'] || function() {};
prototype['isCollection'] = function(p) {
  var $14, _i = p,
    $ = this; {
    return ($.isArray(_i) || $.isObject(_i));
  }
};
var $11g = prototype['coverage'] || function() {};
prototype['coverage'] = function(p, _description) {
  var $_d, $_c, $15, _test = p,
    $ = this; {
    var $16 = '' + _description + ' - ' + _test;
    if (!($._coveragecache[$16])) {
      $AI.debug_op('Covered ' + $16);
      $._coveragecache[$16] = true;
    }
  }
};
var $12g = prototype['assert'] || function() {};
prototype['assert'] = function(p, _message) {
  var $17, _test = p,
    $ = this; {
    if (!(_test)) {
      throw new Error('SAI: failed assertion: ${message default ""}');
    }
  }
};
var $13g = prototype['debug_op'] || function() {};
prototype['debug_op'] = function(p) {
  var $_d, $_c, $21, $20, $19, $18, _o = p,
    $ = this; {
    try {
      if (undefined === _o) _o = 'undefined';
      if (($19 = (('function' === typeof(_o.next))))) {
        _o = '{possible iterator via .next}';
      } else if (($20 = (('function' === typeof(_o))))) {
        _o = '{function}';
      }
      $.debugFunction(_o);
    } catch ($21) {
      $.debugFunction('SAILib.debug exception: ' + $21.message);
      $.debugFunction(_o);
    }
  }
};
var $14g = prototype['iterator_op'] || function() {};
prototype['iterator_op'] = function(p) {
  var $_d, $_c, $25, $24, $23, $22, _i = p,
    $ = this; {
    if (!(_i)) {
      return _i;
    }
    if (($23 = (('function' === typeof(_i.next))))) {
      return _i;
    }
    if (($24 = (('function' === typeof(_i))))) {
      return _i();
    }
    if (($25 = (_i[Symbol.iterator]))) {
      return _i[Symbol.iterator]();
    }
    return _i;
  }
};
var $15g = prototype['iterate_op'] || function() {};
prototype['iterate_op'] = function(p) {
  var $_d, $_c, $44, $43, $42, $41, $40, $37, $36, $35, $34, $33, $29, $28, $27, $26, _a = p,
    $ = this; {
    if (($27 = ((undefined === _a)))) {
      return _a;
    }
    if (($28 = ($.mustIterate(_a)))) {
      return $.iterator_op(_a);
    }
    if (($29 = (_a[Symbol.iterator]))) {
      return _a[Symbol.iterator]();
    }
    if (($37 = ($.isArray(_a)))) {
      return function*(p) {
        {
          var $35 = _a;
          if (undefined === $35) $35 = [];
          var $32 = $35.length;
          if ($32) {
            var $33, $34 = 0;
            for (; $34 < $32; $34++) {
              $33 = $35[$34];
              yield($33);
            }
          }
        }
      }();
    }
    if (($44 = ($.isObject(_a)))) {
      return function*(p) {
        {
          var $42 = _a;
          if (undefined === $42) $42 = [];
          for (var $41 in $42) {
            var $40 = $42[$41];
            yield([$41, $40]);
          }
        }
      }();
    }
    return function*(p) {
      {
        yield(_a);
      }
    }();
  }
};
var $16g = prototype['kviterate_op'] || function() {};
prototype['kviterate_op'] = function(p) {
  var $_d, $_c, $72, $71, $70, $69, $68, $65, $64, $63, $62, $61, $57, $56, $55, $54, $51, $50, $49, $48, $45, _a = p,
    $ = this; {
    if (!(_a)) {
      return function*(p) {
        {;
        }
      }();
    }
    if (($51 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          var $46 = $AI.iterator_op(_a),
            $47 = $46.next();
          if (!$47.done)
            for (var $49 = 0; !$47.done; $47 = $46.next(), $49++) {
              $48 = $47.value;
              yield([$49, $48]);;
            }
        }
      }();
    }
    if (($57 = (_a[Symbol.iterator]))) {
      return function*(p) {
        {
          var $52 = $AI.iterator_op(_a),
            $53 = $52.next();
          if (!$53.done)
            for (var $55 = 0; !$53.done; $53 = $52.next(), $55++) {
              $54 = $53.value;
              yield([$55, $54]);;
            }
        }
      }();
    }
    if (($65 = ($.isArray(_a)))) {
      return function*(p) {
        {
          var $63 = _a;
          if (undefined === $63) $63 = [];
          var $60 = $63.length;
          if ($60) {
            var $61, $62 = 0;
            for (; $62 < $60; $62++) {
              $61 = $63[$62];
              yield([$62, $61]);
            }
          }
        }
      }();
    }
    if (($72 = ($.isObject(_a)))) {
      return function*(p) {
        {
          var $70 = _a;
          if (undefined === $70) $70 = [];
          for (var $69 in $70) {
            var $68 = $70[$69];
            yield([$69, $68]);
          }
        }
      }();
    }
    return function*(p) {
      {
        yield([0, _a]);
      }
    }();
  }
};
var $17g = prototype['collect_op'] || function() {};
prototype['collect_op'] = function(p) {
  var $_d, $_c, $79, $78, $77, _a, $74, $73, _i = p,
    $ = this; {
    if (($74 = ((undefined === _i)))) {
      return _i;
    }
    if (!($.mustIterate(_i))) {
      return _i;
    }
    _a = [];
    var $75 = $AI.iterator_op(_i),
      $76 = $75.next();
    if (!$76.done)
      for (var $78 = 0; !$76.done; $76 = $75.next(), $78++) {
        $77 = $76.value;
        _a.push($77);;
      }
    return _a;
  }
};
var $18g = prototype['drain_op'] || function() {};
prototype['drain_op'] = function(p) {
  var $86, $85, $84, $81, $80, _i = p,
    $ = this; {
    if (($81 = ((undefined === _i)))) {
      return _i;
    }
    if (!($.mustIterate(_i))) {
      return _i;
    }
    var $82 = $AI.iterator_op(_i),
      $83 = $82.next();
    if (!$83.done)
      for (var $85 = 0; !$83.done; $83 = $82.next(), $85++) {
        $84 = $83.value;;;
      }
  }
};
var $19g = prototype['sort_op'] || function() {};
prototype['sort_op'] = function(p, _fn) {
  var $90, $89, $88, $87, _a = p,
    $ = this; {
    if (($88 = ($.isArray(_a)))) {
      return _a.slice(0).sort(_fn);
    }
    if (($89 = ($.mustIterate(_a)))) {
      return $.collect_op(_a).sort(_fn);
    }
    if (($90 = ($.isObject(_a)))) {
      return $.values_op(_a).sort(_fn);
    }
    return _a;
  }
};
var $20g = prototype['enlist_op'] || function() {};
prototype['enlist_op'] = function(p) {
  var $_d, $_c, $106, $105, $104, $103, $102, $99, $98, $97, $96, _out, $93, $92, $91, _a = p,
    $ = this; {
    if (($92 = ((undefined === _a)))) {
      return _a;;
    }
    if (($93 = ($.isArray(_a)))) {
      return _a;;
    }
    _out = [];
    if (($99 = ($.mustIterate(_a)))) {
      var $94 = $AI.iterator_op(_a),
        $95 = $94.next();
      if (!$95.done)
        for (var $97 = 0; !$95.done; $95 = $94.next(), $97++) {
          $96 = $95.value;
          _out.push($96);;
        }
    } else if (($106 = ($.isObject(_a)))) {
      var $104 = _a;
      if (undefined === $104) $104 = [];
      for (var $103 in $104) {
        var $102 = $104[$103];
        _out.push([$103, $102]);
      }
    } else {
      _out.push(_a);
    }
    return _out;
  }
};
var $21g = prototype['entrait_op'] || function() {};
prototype['entrait_op'] = function(p) {
  var $_d, $_c, $124, $123, $122, $121, $120, $119, $115, $114, $113, $112, $109, _v, _k, _assign, _out, $108, $107, _a = p,
    $ = this; {
    if (($108 = ((undefined === _a)))) {
      return _a;;
    }
    _out = [];
    _assign = function(p, _v) {
      var _k = p; {
        if (($109 = (((_k !== undefined) && (_v !== undefined))))) {
          _out[_k] = _v;
        }
      }
    };
    if (($115 = ($.mustIterate(_a)))) {
      var $110 = $AI.iterator_op(_a),
        $111 = $110.next();
      if (!$111.done)
        for (var $113 = 0; !$111.done; $111 = $110.next(), $113++) {
          $112 = $111.value;
          _assign($112[0], $112[1]);;
        }
    } else if (($123 = ($.isArray(_a)))) {
      var $121 = _a;
      if (undefined === $121) $121 = [];
      var $118 = $121.length;
      if ($118) {
        var $119, $120 = 0;
        for (; $120 < $118; $120++) {
          $119 = $121[$120];
          _assign($119[0], $119[1]);
        }
      }
    } else if (($124 = ($.isObject(_a)))) {
      return _a;
    } else {
      _out[_a] = true;
    }
    return _out;
  }
};
var $22g = prototype['alter_op'] || function() {};
prototype['alter_op'] = function(p, _fn) {
  var $125, _a = p,
    $ = this; {
    return _fn(_a);
  }
};
var $23g = prototype['observe_op'] || function() {};
prototype['observe_op'] = function(p, _fn) {
  var $_d, $_c, $126, _a = p,
    $ = this; {
    _fn(_a);
    return _a;
  }
};
var $24g = prototype['audit_op'] || function() {};
prototype['audit_op'] = function(p, _fn) {
  var $_d, $_c, $148, $147, $146, $145, $144, $141, $140, $139, $138, $135, $134, $133, $132, $131, $127, _a = p,
    $ = this; {
    if (($135 = ($.isArray(_a)))) {
      var $133 = _a;
      if (undefined === $133) $133 = [];
      var $130 = $133.length;
      if ($130) {
        var $131, $132 = 0;
        for (; $132 < $130; $132++) {
          $131 = $133[$132];
          _fn($131, $132);
        }
      }
    } else if (($141 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          var $136 = $AI.iterator_op(_a),
            $137 = $136.next();
          if (!$137.done)
            for (var $139 = 0; !$137.done; $137 = $136.next(), $139++) {
              $138 = $137.value;
              _fn($138, $139);
              yield($138);;
            }
        }
      }();
    } else if (($148 = ($.isObject(_a)))) {
      var $146 = _a;
      if (undefined === $146) $146 = [];
      for (var $145 in $146) {
        var $144 = $146[$145];
        _fn($144, $145);
      }
    }
    return _a;
  }
};
var $25g = prototype['concat_op'] || function() {};
prototype['concat_op'] = function(p, _b, _inplace) {
  var $_d, $_c, $192, $191, $190, $189, $188, $185, $184, $183, $182, $181, $178, $177, $176, $175, $174, $170, $169, $168, $165, $164, $163, $162, $159, $158, $157, $154, $153, $152, $151, $150, $149, _a = p,
    $ = this; {
    if (($152 = ((undefined === _a)))) {
      if (($150 = ((undefined === _b)))) {
        return undefined;;
      }
      if (($151 = (($.isArray(_b) || $.mustIterate(_b))))) {
        return _b;;
      }
      return [_b];
    }
    if (($154 = ((undefined === _b)))) {
      if (($153 = (($.isArray(_a) || $.mustIterate(_a))))) {
        return _a;;
      }
      return [_a];
    }
    if (($184 = ($.mustIterate(_a)))) {
      if (($165 = ($.mustIterate(_b)))) {
        return function*(p) {
          {
            var $155 = $AI.iterator_op(_a),
              $156 = $155.next();
            if (!$156.done)
              for (var $158 = 0; !$156.done; $156 = $155.next(), $158++) {
                $157 = $156.value;
                yield($157);;;
              }
            var $160 = $AI.iterator_op(_b),
              $161 = $160.next();
            if (!$161.done)
              for (var $163 = 0; !$161.done; $161 = $160.next(), $163++) {
                $162 = $161.value;
                yield($162);;;
              }
          }
        }();
      }
      if (($178 = ($.isArray(_b)))) {
        _b = $AI.clone_op(_b);
        return function*(p) {
          {
            var $166 = $AI.iterator_op(_a),
              $167 = $166.next();
            if (!$167.done)
              for (var $169 = 0; !$167.done; $167 = $166.next(), $169++) {
                $168 = $167.value;
                yield($168);;;
              }
            var $176 = _b;
            if (undefined === $176) $176 = [];
            var $173 = $176.length;
            if ($173) {
              var $174, $175 = 0;
              for (; $175 < $173; $175++) {
                $174 = $176[$175];
                yield($174);;
              }
            }
          }
        }();
      }
      return function*(p) {
        {
          var $179 = $AI.iterator_op(_a),
            $180 = $179.next();
          if (!$180.done)
            for (var $182 = 0; !$180.done; $180 = $179.next(), $182++) {
              $181 = $180.value;
              yield($181);;;
            }
          yield(_b);
        }
      }();
    }
    if (($185 = ((!($.isArray(_a)))))) {
      _a = [_a];
    } else if (!(_inplace)) {
      _a = $AI.clone_op(_a);
    }
    if (($191 = ($.mustIterate(_b)))) {
      var $186 = $AI.iterator_op(_b),
        $187 = $186.next();
      if (!$187.done)
        for (var $189 = 0; !$187.done; $187 = $186.next(), $189++) {
          $188 = $187.value;
          _a.push($188);;;
        }
    } else if (($192 = ($.isArray(_b)))) {
      _a = _a.concat(_b);
    } else {
      _a.push(_b);
    }
    return _a;
  }
};
var $26g = prototype['map_op'] || function() {};
prototype['map_op'] = function(p, _fn) {
  var $_d, $_c, $215, $214, $213, $212, $211, $208, $207, $206, $205, $202, $201, $200, $199, $198, _r, $194, $193, _a = p,
    $ = this; {
    if (($194 = ((undefined === _a)))) {
      return _a;;
    }
    if (($202 = ($.isArray(_a)))) {
      _r = [];
      var $200 = _a;
      if (undefined === $200) $200 = [];
      var $197 = $200.length;
      if ($197) {
        var $198, $199 = 0;
        for (; $199 < $197; $199++) {
          $198 = $200[$199];
          _r[$199] = _fn($198, $199);;
        }
      }
      return _r;
    }
    if (($208 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          var $203 = $AI.iterator_op(_a),
            $204 = $203.next();
          if (!$204.done)
            for (var $206 = 0; !$204.done; $204 = $203.next(), $206++) {
              $205 = $204.value;
              yield(_fn($205, $206));;;
            }
        }
      }();
    }
    if (($215 = ($.isObject(_a)))) {
      _r = {};
      var $213 = _a;
      if (undefined === $213) $213 = [];
      for (var $212 in $213) {
        var $211 = $213[$212];
        _r[$212] = _fn($211, $212);;
      }
      return _r;
    }
    return _fn(_a, undefined);
  }
};
var $27g = prototype['filter_op'] || function() {};
prototype['filter_op'] = function(p, _fn) {
  var $_d, $_c, $241, $240, $239, $238, $237, $234, $233, $232, $231, $230, $227, $226, $225, $224, $223, $222, $218, _r, $217, $216, _a = p,
    $ = this; {
    if (($217 = ((undefined === _a)))) {
      return _a;;
    }
    if (($226 = ($.isArray(_a)))) {
      _r = [];
      var $224 = _a;
      if (undefined === $224) $224 = [];
      var $221 = $224.length;
      if ($221) {
        var $222, $223 = 0;
        for (; $223 < $221; $223++) {
          $222 = $224[$223];
          if (($218 = (_fn($222, $223)))) {
            _r.push($222);;
          };
        }
      }
      return _r;
    }
    if (($233 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          var $228 = $AI.iterator_op(_a),
            $229 = $228.next();
          if (!$229.done)
            for (var $231 = 0; !$229.done; $229 = $228.next(), $231++) {
              $230 = $229.value;
              if (($227 = (_fn($230, $231)))) {
                yield($230);;
              };;
            }
        }
      }();
    }
    if (($241 = ($.isObject(_a)))) {
      _r = {};
      var $239 = _a;
      if (undefined === $239) $239 = [];
      for (var $238 in $239) {
        var $237 = $239[$238];
        if (($234 = (_fn($237, $238)))) {
          _r[$238] = $237;;
        };
      }
      return _r;
    }
    return ((_fn(_a, undefined)) ? (_a) : (undefined));
  }
};
var $28g = prototype['reduce_op'] || function() {};
prototype['reduce_op'] = function(p, _fn, _accum) {
  var $_d, $_c, $256, $255, $254, $253, $252, $249, _init, $248, $247, _step, $246, $245, $244, _k, _l, $243, $242, _a = p,
    $ = this; {
    if (($243 = ((undefined === _a)))) {
      return _a;;
    }
    if (($246 = ($.isArray(_a)))) {
      _l = _a.length;
      if (!(_l)) {
        return _accum;;
      }
      _k = 0;
      if (($244 = ((undefined === _accum)))) {
        _accum = _a[_k];
        _k = (_k || 0) + 1;
      }
      var $245;
      while ($245 = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        _k = (_k || 0) + 1;
      }
      return _accum;
    }
    if (($248 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          _a = $AI.iterate_op(_a);
          _step = _a.next();
          if (!(_step.done)) {
            _k = 0;
            if (($247 = ((undefined === _accum)))) {
              _accum = _step.value;
              _step = _a.next();
              _k = (_k || 0) + 1;
            }
            while (!(_step.done)) {
              _accum = _fn(_accum, _step.value, _k);
              _step = _a.next();
              _k = (_k || 0) + 1;
            }
          }
          yield(_accum);
        }
      }();
    }
    if (($256 = ($.isObject(_a)))) {
      _init = (undefined === _accum);
      var $254 = _a;
      if (undefined === $254) $254 = [];
      for (var $253 in $254) {
        var $252 = $254[$253];
        if (($249 = (_init))) {
          _accum = $252;
          _init = false;
        } else {
          _accum = _fn(_accum, $252, $253);
        }
      }
      return _accum;
    }
    return $.reduce_op([_a], _fn, _accum);
  }
};
var $29g = prototype['slice_op'] || function() {};
prototype['slice_op'] = function(p, _st, _ct) {
  var $_d, $_c, $303, $302, $300, $299, _v, _cache, $298, $297, $296, $295, $294, $293, $292, _keep, _only, _size, _crop, _skip, $291, $290, $289, $288, $287, $286, $285, $284, $283, $282, $281, $280, $279, $276, $275, $274, $273, $272, $271, $270, $269, $268, $267, $266, $265, $264, $263, $262, _len, $261, $260, $259, $258, $257, _a = p,
    $ = this; {
    if (($258 = ((undefined === _a)))) {
      return _a;;
    }
    if (($270 = ($.isString(_a)))) {
      if (($259 = ((_ct === 0)))) {
        return '';
      }
      if (($260 = (((_ct === undefined) && ((_st === undefined) || (_st === 0)))))) {
        return _a;
      }
      if (($261 = (((_ct > 0) && ((_st === undefined) || (_st === 0)))))) {
        return _a.substring(0, _ct);
      }
      _len = _a.length;
      if (($262 = (((undefined === _st) && (_ct < 0))))) {
        return _a.substring((_len + _ct), _len);
      } else if (($263 = (((0 === _st) && (_ct < 0))))) {
        return _a.substring(0, (_len + _ct));
      } else if (($266 = ((_st > 0)))) {
        if (($264 = ((_ct < 0)))) {
          return _a.substring(_st, (_len + _ct));
        } else if (($265 = ((_ct > 0)))) {
          return _a.substring(_st, (_st + _ct));
        } else {
          return _a.substring(_st, _len);
        }
      } else if (($269 = ((_st < 0)))) {
        if (($267 = ((_ct < 0)))) {
          return _a.substring((_len + _st), (_len + _ct));
        } else if (($268 = ((_ct > 0)))) {
          return _a.substring((_len + _st), (_len + (_st + _ct)));
        } else {
          return _a.substring((_len + _st), _len);
        }
      }
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
    }
    if (($272 = ((_ct === 0)))) {
      if (($271 = ($.mustIterate(_a)))) {
        return function*(p) {
          {;;
          }
        };
      } else {
        return [];
      }
    }
    if (!(($.mustIterate(_a) || $.isArray(_a)))) {
      _a = [_a];
    }
    if (($274 = (((_ct === undefined) && ((_st === undefined) || (_st === 0)))))) {
      if (($273 = ($.isArray(_a)))) {
        return $AI.clone_op(_a);
      } else {
        return _a;
      }
    }
    if (($282 = (((_ct > 0) && ((_st === undefined) || (_st === 0)))))) {
      if (($275 = ($.isArray(_a)))) {
        return _a.slice(0, _ct);
      } else {
        return function*(p) {
          {
            var $277 = $AI.iterator_op(_a),
              $278 = $277.next();
            if (!$278.done)
              for (var $280 = 0; !$278.done; $278 = $277.next(), $280++) {
                $279 = $278.value;
                if (($276 = (($280 < _ct)))) {
                  yield($279);;
                } else {
                  break;;
                };
              }
          }
        }();
      }
    }
    if (($291 = ($.isArray(_a)))) {
      _len = _a.length;
      if (($283 = (((undefined === _st) && (_ct < 0))))) {
        return _a.slice((_len + _ct), _len);
      } else if (($284 = (((0 === _st) && (_ct < 0))))) {
        return _a.slice(0, (_len + _ct));
      } else if (($287 = ((_st > 0)))) {
        if (($285 = ((_ct < 0)))) {
          return _a.slice(_st, (_len + _ct));
        } else if (($286 = ((_ct > 0)))) {
          return _a.slice(_st, (_st + _ct));
        } else {
          return _a.slice(_st, _len);
        }
      } else if (($290 = ((_st < 0)))) {
        if (($288 = ((_ct < 0)))) {
          return _a.slice((_len + _st), (_len + _ct));
        } else if (($289 = ((_ct > 0)))) {
          return _a.slice((_len + _st), (_len + (_st + _ct)));
        } else {
          return _a.slice((_len + _st), _len);
        }
      }
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
    }
    _skip = 0;
    _crop = 0;
    _size = 0;
    _only = undefined;
    _keep = true;
    if (($292 = (((undefined === _st) && (_ct < 0))))) {
      _keep = false;
      _size = (0 - (_ct));
    } else if (($295 = ((_st < 0)))) {
      _keep = false;
      _size = (0 - (_st));
      if (($293 = ((_ct < 0)))) {
        _crop = (0 - (_ct));
      } else if (($294 = ((_ct > 0)))) {
        _crop = (_size - _ct);
      }
    } else if (($298 = ((_st > 0)))) {
      _skip = _st;
      if (($296 = ((_ct < 0)))) {
        _size = (0 - (_ct));
        _crop = (0 - (_ct));
      } else if (($297 = ((_ct > 0)))) {
        _only = _ct;
      }
    } else {
      _size = (0 - (_ct));
      _crop = (0 - (_ct));
    }
    _a = $AI.iterate_op(_a);
    return function*(p) {
      {
        _cache = [];
        _v = _a.next();
        while (!(((_skip <= 0) || _v.done))) {
          _skip--;
          _v = _a.next();
        }
        while (!(_v.done)) {
          _cache.push(_v.value);
          if (($302 = ((_cache.length > _size)))) {
            var $301 = _cache.shift();
            if (($300 = (_keep))) {
              if (($299 = ((_only <= 0)))) {
                return;;
              }
              _only--;
              yield($301);
            }
          }
          _v = _a.next();
        }
        var $303;
        while ($303 = ((_cache.length > _crop))) {
          yield(_cache.shift());
        }
      }
    }();
  }
};
var $30g = prototype['element_op'] || function() {};
prototype['element_op'] = function(p, _index) {
  var $308, $307, $306, $305, $304, _a = p,
    $ = this; {
    if (($305 = ((undefined === _a)))) {
      return _a;;
    }
    if (($306 = ($.isArray(_a)))) {
      return _a[_index];
    }
    if (($307 = ($.mustIterate(_a)))) {
      return $.slice_op(_a, _index, 1).next().value;
    }
    if (($308 = (((_index === 0) || (_index === (0 - (1))))))) {
      return _a;
    }
    return undefined;
  }
};
var $31g = prototype['clone_op'] || function() {};
prototype['clone_op'] = function(p) {
  var $317, $316, $315, $314, $313, _b, $310, $309, _a = p,
    $ = this; {
    if (($310 = ($.isArray(_a)))) {
      return _a.slice(0);
    }
    if (($317 = ($.isObject(_a)))) {
      _b = {};
      var $315 = _a;
      if (undefined === $315) $315 = [];
      for (var $314 in $315) {
        var $313 = $315[$314];
        if (!((undefined === $313))) {
          _b[$314] = $313;
        }
      }
      return _b;
    }
    return _a;
  }
};
var $32g = prototype['overlay_op'] || function() {};
prototype['overlay_op'] = function(p, _r) {
  var $_d, $_c, $_b, _i, $346, _vr, _vl, $345, $344, $343, $342, $338, $337, $336, $335, $334, $333, $330, $329, $328, $327, $326, $325, _v, $321, $320, $319, $318, _l = p,
    $ = this; {
    if (($319 = ((undefined === _l)))) {
      _l = {};
    }
    if (($320 = ((!($.isMergable(_l)))))) {
      throw new Error('SAI: Attempt to OVERLAY onto something that\'s not a collection/iterable.');
    }
    if (($321 = ((!($.isMergable(_r)))))) {
      throw new Error('SAI: Attempt to OVERLAY with something that\'s not a collection/iterable.');
    }
    if (!($.mustIterate(_l))) {
      _l = $AI.clone_op(_l);
      if (($329 = ($.mustIterate(_r)))) {
        return function*(p) {
          {
            _r = $AI.iterate_op(_r);
            _v = _r.next();
            var $327 = _l;
            if (undefined === $327) $327 = [];
            var $324 = $327.length;
            if ($324) {
              var $325, $326 = 0;
              for (; $326 < $324; $326++) {
                $325 = $327[$326];
                if (!(_v.done)) {
                  yield(((undefined !== ($_b = _v.value)) ? $_b : $325));
                  _v = _r.next();
                } else {
                  yield($325);
                }
              }
            }
          }
        }();
      }
      if (($337 = ($.isObject(_r)))) {
        var $335 = _r;
        if (undefined === $335) $335 = [];
        for (var $334 in $335) {
          var $333 = $335[$334];
          if (($330 = (($333 !== undefined)))) {
            _l[$334] = $333;
          }
        }
      } else {
        var $344 = _r;
        if (undefined === $344) $344 = [];
        var $341 = $344.length;
        if ($341) {
          var $342, $343 = 0;
          for (; $343 < $341; $343++) {
            $342 = $344[$343];
            if (($338 = (($342 !== undefined)))) {
              _l[$343] = $342;
            }
          }
        }
      }
      return _l;
    }
    _l = $AI.iterate_op(_l);
    if (($346 = ($.mustIterate(_r)))) {
      _r = $AI.iterate_op(_r);
      return function*(p) {
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
      }();
    }
    _r = $AI.clone_op(_r);
    return function*(p) {
      {
        _i = 0;
        _v = _l.next();
        while (!(_v.done)) {
          yield((((_r[_i] === undefined)) ? (_v.value) : (_r[_i])));
          _i = (_i || 0) + 1;
          _v = _l.next();
        }
      }
    }();
  }
};
var $33g = prototype['select_op'] || function() {};
prototype['select_op'] = function(p, _manifest) {
  var $_d, $_c, $415, $414, $413, $412, $411, $408, $407, $406, $405, $404, $400, $399, $398, $397, $394, $393, $392, $391, $390, $387, $386, _i, $385, $384, $383, $382, $381, $377, $376, $375, $374, $373, $370, _buffer, _l, $369, $368, $367, $366, $365, $362, $361, $360, $359, $356, $355, $354, $353, $352, _result, $348, $347, _src = p,
    $ = this; {
    if (!($.isMergable(_src))) {
      throw new Error('SAI: Left argument to SELECT must be list/traits/iterable.');
    }
    if (!($.isMergable(_manifest))) {
      if (($348 = ((undefined === _manifest)))) {
        return _manifest;;
      }
      _manifest = [_manifest];
    }
    if (($369 = ($.isArray(_src)))) {
      if (($356 = ($.isArray(_manifest)))) {
        _result = [];
        var $354 = _manifest;
        if (undefined === $354) $354 = [];
        var $351 = $354.length;
        if ($351) {
          var $352, $353 = 0;
          for (; $353 < $351; $353++) {
            $352 = $354[$353];
            _result.push(_src[$352]);
          }
        }
        return _result;
      } else if (($362 = ($.mustIterate(_manifest)))) {
        _src = $AI.clone_op(_src);
        return function*(p) {
          {
            var $357 = $AI.iterator_op(_manifest),
              $358 = $357.next();
            if (!$358.done)
              for (var $360 = 0; !$358.done; $358 = $357.next(), $360++) {
                $359 = $358.value;
                yield(_src[$359]);;
              }
          }
        }();
      }
      _result = [];
      var $367 = _manifest;
      if (undefined === $367) $367 = [];
      for (var $366 in $367) {
        var $365 = $367[$366];
        _result.push(_src[$366]);
      }
      return _result;
    } else if (($393 = ($.mustIterate(_src)))) {
      if (($376 = ($.mustIterate(_manifest)))) {
        _src = $AI.iterate_op(_src);
        return function*(p) {
          {
            _l = _src.next();
            _buffer = [];
            var $371 = $AI.iterator_op(_manifest),
              $372 = $371.next();
            if (!$372.done)
              for (var $374 = 0; !$372.done; $372 = $371.next(), $374++) {
                $373 = $372.value;
                var $370;
                while ($370 = (((!(_l.done)) && (_buffer.length <= $373)))) {
                  _buffer.push(_l.value);
                  _l = _src.next();
                }
                yield(_buffer[$373]);;
              }
          }
        }();
      }
      if (($385 = ($.isArray(_manifest)))) {
        _manifest = $AI.clone_op(_manifest);
        _src = $AI.iterate_op(_src);
        return function*(p) {
          {
            _l = _src.next();
            _buffer = [];
            var $383 = _manifest;
            if (undefined === $383) $383 = [];
            var $380 = $383.length;
            if ($380) {
              var $381, $382 = 0;
              for (; $382 < $380; $382++) {
                $381 = $383[$382];
                var $377;
                while ($377 = (((!(_l.done)) && (_buffer.length <= $381)))) {
                  _buffer.push(_l.value);
                  _l = _src.next();
                }
                yield(_buffer[$381]);
              }
            }
          }
        }();
      }
      _manifest = $AI.sort_op(($AI.map_op($AI.keys_op(_manifest), function($_v, $_k) {
        return ($AI.number_op($_v))
      })), function(a, b) {
        var aa, bb;
        aa = a;
        bb = b;
        if (aa < bb) return -1;
        if (aa > bb) return 1;
        return 0;
      });
      return function*(p) {
        {
          _i = 0;
          var $388 = $AI.iterator_op(_src),
            $389 = $388.next();
          if (!$389.done)
            for (var $391 = 0; !$389.done; $389 = $388.next(), $391++) {
              $390 = $389.value;
              if (($387 = (($391 === _manifest[_i])))) {
                yield($390);
                _i = (_i || 0) + 1;
                if (($386 = ((_i >= _manifest.length)))) {
                  return;;
                }
              };
            }
        }
      }();
    }
    if (($400 = ($.mustIterate(_manifest)))) {
      _src = $AI.clone_op(_src);
      return function*(p) {
        {
          var $395 = $AI.iterator_op(_manifest),
            $396 = $395.next();
          if (!$396.done)
            for (var $398 = 0; !$396.done; $396 = $395.next(), $398++) {
              $397 = $396.value;
              if (($394 = (($397 !== undefined)))) {
                yield(_src[$397]);
              };
            }
        }
      }();
    }
    _result = {};
    if (($408 = ($.isArray(_manifest)))) {
      var $406 = _manifest;
      if (undefined === $406) $406 = [];
      var $403 = $406.length;
      if ($403) {
        var $404, $405 = 0;
        for (; $405 < $403; $405++) {
          $404 = $406[$405];
          _result[$404] = _src[$404];
        }
      }
      return _result;
    }
    if (($415 = ($.isObject(_manifest)))) {
      var $413 = _manifest;
      if (undefined === $413) $413 = [];
      for (var $412 in $413) {
        var $411 = $413[$412];
        _result[$412] = _src[$412];
      }
    } else {
      _result[_manifest] = _src[_manifest];
    }
    return _result;
  }
};
var $34g = prototype['update_op'] || function() {};
prototype['update_op'] = function(p, _manifest) {
  var $440, $439, $438, $437, $434, $433, $432, $431, $430, $429, $425, $424, $423, $422, $421, $418, $417, $416, _dest = p,
    $ = this; {
    if (($417 = ((undefined === _dest)))) {
      _dest = {};
    }
    if (!(($.isArray(_dest) || $.isObject(_dest)))) {
      throw new Error('Attempt to UPDATE into something that\'s not a list or traits.');
    }
    if (!($.isMergable(_manifest))) {
      throw new Error('Attempt to UPDATE from something that\'s not a list or traits.');
    }
    if (($424 = ($.mustIterate(_manifest)))) {
      var $419 = $AI.iterator_op(_manifest),
        $420 = $419.next();
      if (!$420.done)
        for (var $422 = 0; !$420.done; $420 = $419.next(), $422++) {
          $421 = $420.value;
          if (($418 = (($421 !== undefined)))) {
            _dest[$422] = $421;;
          };
        }
    } else if (($433 = ($.isArray(_manifest)))) {
      var $431 = _manifest;
      if (undefined === $431) $431 = [];
      var $428 = $431.length;
      if ($428) {
        var $429, $430 = 0;
        for (; $430 < $428; $430++) {
          $429 = $431[$430];
          if (($425 = (($429 !== undefined)))) {
            _dest[$430] = $429;;
          }
        }
      }
    } else {
      var $439 = _manifest;
      if (undefined === $439) $439 = [];
      for (var $438 in $439) {
        var $437 = $439[$438];
        if (($434 = (($437 !== undefined)))) {
          _dest[$438] = $437;;
        }
      }
    }
    return _dest;
  }
};
var $35g = prototype['delete_op'] || function() {};
prototype['delete_op'] = function(p, _manifest) {
  var $_d, $_c, $473, $472, $469, $468, $464, $463, $459, $458, $457, $456, $455, $452, $451, $447, $446, _deletel, _ignore, _deleter, _index, _splicer, $442, $441, _dest = p,
    $ = this; {
    if (($442 = ($.mustIterate(_dest)))) {
      throw new Error('SAI: Attempt to DELETE from an iterator, which is not presently supported.');
    }
    if (!($.isObject(_dest))) {
      throw new Error('SAI: Attempt to DELETE from something that\'s not a list or traits.');
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
    if (($459 = ($.isArray(_dest)))) {
      if (!($.isMergable(_manifest))) {
        _splicer(_manifest);
      } else if (($447 = ($.isArray(_manifest)))) {
        var $444 = _manifest;
        if (undefined === $444) $444 = [];
        var $443 = $444.length;
        for (var $445 = 0; $445 < $443; $445++) {
          _splicer($444[$445], $445, $444)
        };
      } else if (($452 = ($.mustIterate(_manifest)))) {
        var $448 = $AI.iterator_op(_manifest),
          $449 = $448.next(),
          $450 = 0;
        while (!$449.done) {
          _splicer($449.value, $450);
          $449 = $448.next();
          $450++;
        }
      } else {
        var $457 = _manifest;
        if (undefined === $457) $457 = [];
        for (var $456 in $457) {
          var $455 = $457[$456];
          let _index = parseInt($456);
          if (!(isNaN(_index))) {
            _dest.splice(_index, 1);
          }
        }
      }
    } else {
      if (!($.isMergable(_manifest))) {
        delete _dest[_manifest];
      } else if (($464 = ($.isArray(_manifest)))) {
        var $461 = _manifest;
        if (undefined === $461) $461 = [];
        var $460 = $461.length;
        for (var $462 = 0; $462 < $460; $462++) {
          _deletel($461[$462], $462, $461)
        };
      } else if (($469 = ($.mustIterate(_manifest)))) {
        var $465 = $AI.iterator_op(_manifest),
          $466 = $465.next(),
          $467 = 0;
        while (!$466.done) {
          _deletel($466.value, $467);
          $466 = $465.next();
          $467++;
        }
      } else if (($473 = ($.isObject(_manifest)))) {
        var $470 = _manifest;
        if (undefined === $470) $470 = [];
        for (var $471 in $470) _deleter($470[$471], $471, $470);
      } else {
        delete _dest[_manifest];
      }
    }
    return _dest;
  }
};
var $36g = prototype['deepFreeze'] || function() {};
prototype['deepFreeze'] = function(p) {
  var $_d, $_c, $483, $482, $481, $480, $477, $476, $475, $474, _o = p,
    $ = this; {
    Object.freeze(_o);
    var $482 = _o;
    if (undefined === $482) $482 = [];
    for (var $481 in $482) {
      var $480 = $482[$481];
      if (($475 = ((!(_o.hasOwnProperty($481)))))) {
        continue;;
      }
      if (($476 = (('object' !== typeof($480))))) {
        continue;;
      }
      if (($477 = (Object.isFrozen($480)))) {
        continue;;
      }
      $.deepFreeze($480);
    }
  }
};
var $37g = prototype['xor_op'] || function() {};
prototype['xor_op'] = function(p, _b) {
  var $484, _a = p,
    $ = this; {
    return ((_a) ? (((_b) ? (false) : (_a))) : (((_b) ? (_b) : (false))));
  }
};
var $38g = prototype['min_op'] || function() {};
prototype['min_op'] = function(p, _b) {
  var $485, _a = p,
    $ = this; {
    return (((_a < _b)) ? (_a) : (_b));
  }
};
var $39g = prototype['max_op'] || function() {};
prototype['max_op'] = function(p, _b) {
  var $486, _a = p,
    $ = this; {
    return (((_a > _b)) ? (_a) : (_b));
  }
};
var $40g = prototype['compare_op'] || function() {};
prototype['compare_op'] = function(p, _b) {
  var $489, $488, $487, _a = p,
    $ = this; {
    if (($488 = ((_a < _b)))) {
      return (0 - (1));;
    }
    if (($489 = ((_a > _b)))) {
      return 1;;
    }
    return 0;
  }
};
var $41g = prototype['keys_op'] || function() {};
prototype['keys_op'] = function(p) {
  var $_d, $_c, $508, $507, $506, $505, $504, $501, $500, $499, $498, $495, $494, $493, $492, _result, $490, _a = p,
    $ = this; {
    _result = [];
    if (($495 = ($.isArray(_a)))) {
      var $492 = 0,
        $491 = _a.length;
      for (; $492 < $491; $492 += 1) {
        _result.push($492);
      }
    } else if (($501 = ($.mustIterate(_a)))) {
      var $496 = $AI.iterator_op(_a),
        $497 = $496.next();
      if (!$497.done)
        for (var $499 = 0; !$497.done; $497 = $496.next(), $499++) {
          $498 = $497.value;
          _result.push($499);;
        }
    } else if (($508 = ($.isObject(_a)))) {
      var $506 = _a;
      if (undefined === $506) $506 = [];
      for (var $505 in $506) {
        var $504 = $506[$505];
        _result.push($505);
      }
    }
    return _result;
  }
};
var $42g = prototype['count_op'] || function() {};
prototype['count_op'] = function(p) {
  var $524, $523, $522, $521, $520, $519, $516, $515, $514, $513, _i, $510, $509, _a = p,
    $ = this; {
    if (($510 = ($.isArray(_a)))) {
      return _a.length;
    }
    _i = 0;
    if (($516 = ($.mustIterate(_a)))) {
      var $511 = $AI.iterator_op(_a),
        $512 = $511.next();
      if (!$512.done)
        for (var $514 = 0; !$512.done; $512 = $511.next(), $514++) {
          $513 = $512.value;
          _i = (_i || 0) + 1;;
        }
      return _i;
    }
    if (($523 = ($.isObject(_a)))) {
      var $521 = _a;
      if (undefined === $521) $521 = [];
      for (var $520 in $521) {
        var $519 = $521[$520];
        _i = (_i || 0) + 1;
      }
      return _i;
    }
    if (($524 = ((_a === undefined)))) {
      return 0;
    }
    return 1;
  }
};
var $43g = prototype['values_op'] || function() {};
prototype['values_op'] = function(p) {
  var $_d, $_c, $535, $534, $533, $532, $531, $530, _result, $527, $526, $525, _a = p,
    $ = this; {
    if (($526 = ($.isArray(_a)))) {
      return $AI.clone_op(_a);
    }
    if (($527 = ($.mustIterate(_a)))) {
      return $.collect_op(_a);
    }
    _result = [];
    if (($534 = ($.isObject(_a)))) {
      var $532 = _a;
      if (undefined === $532) $532 = [];
      for (var $531 in $532) {
        var $530 = $532[$531];
        _result.push($530);
      }
      return _result;
    }
    if (($535 = ((undefined !== _a)))) {
      _result.push(_a);
    }
    return _result;
  }
};
var $44g = prototype['newerror'] || function() {};
prototype['newerror'] = function(p, _file, _parameters) {
  var $542, $541, $540, $539, _e, $536, _line = p,
    $ = this; {
    _e = new Error(_parameters.message, _file, _line);
    var $541 = _parameters;
    if (undefined === $541) $541 = [];
    for (var $540 in $541) {
      var $539 = $541[$540];
      _e[$540] = $539;
    }
    return _e;
  }
};
var $45g = prototype['number_op'] || function() {};
prototype['number_op'] = function(p) {
  var _n, $543, _x = p,
    $ = this; {
    _n = parseFloat(_x);
    return ((isNaN(_n)) ? (0) : (_n));
  }
};
var $46g = prototype['expects_op'] || function() {};
prototype['expects_op'] = function(p, _prototype) {
  var $_d, $_c, $554, $553, $552, $549, $548, $547, $546, $545, _type, _name, _param, _tester, _result, $544, _params = p,
    $ = this; {
    _result = [];
    _tester = function(p, _name, _type) {
      var _param = p; {
        if (($545 = ((_type === typeof(_param))))) {;
        } else if (($546 = ((_param.isof && _param.isof[_type])))) {;
        } else {
          if (($547 = (_param.isa))) {
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
    var $553 = _prototype;
    if (undefined === $553) $553 = [];
    for (var $552 in $553) {
      var _type = $553[$552];
      if (($548 = (($552 === '_root')))) {
        _tester(_params, 'Root', _type);
      } else if (!(_params[$552])) {
        _result.push({
          trait: $552,
          'expects': _type,
          found: 'undefined'
        });
      } else if (($549 = ((_type !== true)))) {
        _tester(_params[$552], $552, _type);
      }
    }
    return _result;
  }
};
var $47g = prototype['expectsThrow'] || function() {};
prototype['expectsThrow'] = function(p, _prototype, _name) {
  var $_d, $_c, $561, $560, $559, $558, _err, _x, $555, _params = p,
    $ = this; {
    _x = $.expects_op(_params, _prototype);
    if (!(_x.length)) {
      return;;
    }
    _err = [];
    var $560 = _x;
    if (undefined === $560) $560 = [];
    for (var $559 in $560) {
      var $558 = $560[$559];
      _err.push('' + $558.trait + ' should be ' + $558.expects + ' but is instead ' + $558.found);
    }
    throw new Error('SAI: parameter exception in ' + _name + '\n' + _err.join('\n'));
  }
};
var $48g = prototype['finalizePrototype'] || function() {};
prototype['finalizePrototype'] = function(p) {
  var $_d, $_c, $583, $582, _obj, $581, $580, $579, $578, $577, $574, $573, $572, $571, $568, $567, $566, $565, $562, _proto = p,
    $ = this; {
    var $567 = _proto.__tobelocked;
    if (undefined === $567) $567 = [];
    for (var $566 in $567) {
      var $565 = $567[$566];
      Object.defineProperty(_proto, $565, {
        configurable: false
      });
    }
    delete _proto.__tobelocked;
    var $573 = _proto.__tobefrozen;
    if (undefined === $573) $573 = [];
    for (var $572 in $573) {
      var $571 = $573[$572];
      $.deepFreeze(_proto[$571]);
    }
    delete _proto.__tobefrozen;
    if (($581 = (_proto.__unverified))) {
      var $579 = _proto.__contracts;
      if (undefined === $579) $579 = [];
      for (var $578 in $579) {
        var $577 = $579[$578];
        if (!(_proto.hasOwnProperty($577))) {
          throw new Error('SAI: Contractually required trait ' + $577 + ' does not exist in object ' + _proto.isa + '.');
        }
      }
      delete _proto.__unverified;
      delete _proto.__contracts;
    }
    _proto.constructor = function(p) {
      {
        _obj = Object.create(_proto);
        if (($582 = (_obj.Constructor))) {
          _obj.Constructor();;
        }
        if (($583 = (_obj.Instantiate))) {
          _obj.Instantiate.apply(_obj, arguments);;
        }
        return _obj;
      }
    };
  }
};
var $49g = prototype['create_op_base'] || function() {};
prototype['create_op_base'] = function(p, _parameters) {
  var $_d, $_c, $587, $586, _obj, _mod, $585, _src, _fn, _proto, $584, _name = p,
    $ = this; {
    _proto = $._protocache[_name];
    if (!(_proto)) {
      _fn = (_name + '.js');
      _src = _FS.readFileSync(_fn, 'utf8');
      if (($585 = ($AI.slice_op((('#!' === _src)), 0, 2)))) {
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
    _obj = Object.create(_proto);
    if (($586 = (_obj.Constructor))) {
      _obj.Constructor();;
    }
    if (($587 = (_obj.Instantiate))) {
      _obj.Instantiate.apply(_obj, _parameters);;
    }
    return _obj;
  }
};
var $50g = prototype['singleton_op'] || function() {};
prototype['singleton_op'] = function(p, _parameters) {
  var $_d, $_c, $588, _name = p,
    $ = this; {
    if (undefined === $._singletoncache[_name]) $._singletoncache[_name] = $.create_op(_name, _parameters);
    return $._singletoncache[_name];
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
