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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/sailib.sai","mtime":"2018-03-20T14:02:37.915Z","fetched":"2018-03-20T14:03:16.254Z"};
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
  var $_d, $_c, $0, $ = this['Instantiate'] ? this : $bindfail('Instantiate'); {
    if ($0 = ($.serial_number)) {
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
prototype['canIterate'] = function(p) {
  var $4, $3, $2, $1, _i = p,
    $ = this; {
    if (!(_i)) {
      return (false);
    }
    /*@:45*/
    if ($2 = (_i[Symbol.iterator])) {
      return (true);
    }
    /*@:47*/
    if ($3 = (('function' === typeof(_i)))) {
      return (true);
    }
    /*@:49*/
    if ($4 = (('function' === typeof(_i.next)))) {
      return (true);
    }
    /*@:51*/
    return (false);
    /*@:52*/
  }
};
var $5g = prototype['mustIterate'] || function() {};
prototype['mustIterate'] = function(p) {
  var $7, $6, $5, _i = p,
    $ = this; {
    if (!(_i)) {
      return (false);
    }
    /*@:62*/
    if ($6 = (('function' === typeof(_i.next)))) {
      return (true);
    }
    /*@:64*/
    if ($7 = (('function' === typeof(_i)))) {
      return (true);
    }
    /*@:66*/
    return (false);
    /*@:67*/
  }
};
var $6g = prototype['isObject'] || function() {};
prototype['isObject'] = function(p) {
  var $10, $9, $8, _i = p,
    $ = this; {
    if ($9 = ((_i === null))) {
      return (false);
    }
    /*@:77*/
    if ($10 = (('object' === typeof(_i)))) {
      return (true);
    }
    /*@:79*/
    return (false);
    /*@:80*/
  }
};
var $7g = prototype['isArray'] || function() {};
prototype['isArray'] = function(p) {
  var $_d, $_c, $11, _i = p,
    $ = this; {
    return (Array.isArray(_i));
    /*@:89*/
  }
};
var $8g = prototype['isString'] || function() {};
prototype['isString'] = function(p) {
  var $12, _i = p,
    $ = this; {
    return (('string' === typeof(_i)));
    /*@:98*/
  }
};
var $9g = prototype['isMergable'] || function() {};
prototype['isMergable'] = function(p) {
  var $13, _i = p,
    $ = this['isMergable'] ? this : $bindfail('isMergable'); {
    return (($.isArray(_i) || ($.isObject(_i) || $.canIterate(_i))));
    /*@:107*/
  }
};
var $10g = prototype['isCollection'] || function() {};
prototype['isCollection'] = function(p) {
  var $14, _i = p,
    $ = this['isCollection'] ? this : $bindfail('isCollection'); {
    return (($.isArray(_i) || $.isObject(_i)));
    /*@:116*/
  }
};
var $11g = prototype['coverage'] || function() {};
prototype['coverage'] = function(p, _description) {
  var $_d, $_c, $16, $15, _test = p,
    $ = this['coverage'] ? this : $bindfail('coverage'); {
    var $16 = '' + _description + ' - ' + _test;
    if (!($._coveragecache[$16])) {
      $AI.debug_op('Covered ' + $16);
      /*@:126*/
      $._coveragecache[$16] = true;
      /*@:127*/
    };
  }
};
var $12g = prototype['assert'] || function() {};
prototype['assert'] = function(p, _txt) {
  var _msg, $17, _test = p,
    $ = this; {
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
  var $_d, $_c, $21, $20, $19, $18, _o = p,
    $ = this['debug_op'] ? this : $bindfail('debug_op'); {
    try {
      if (undefined === _o) _o = 'undefined';
      /*@:149*/
      if ($19 = (('function' === typeof(_o.next)))) {
        _o = '{possible iterator via .next}';
      } else if ($20 = (('function' === typeof(_o)))) {
        _o = '{function}';
      }
      /*@:153*/
      $.debugFunction(_o);
    } catch ($21) {
      $.debugFunction('SAILib.debug exception: ' + $21.message);
      /*@:156*/
      $.debugFunction(_o);
      /*@:157*/
    }
  }
};
var $14g = prototype['iterator_op'] || function() {};
prototype['iterator_op'] = function(p) {
  var $_d, $_c, $25, $24, $23, $22, _i = p,
    $ = this['iterator_op'] ? this : $bindfail('iterator_op'); {
    if (!(_i)) {
      return (_i);
    }
    /*@:169*/
    if ($23 = (('function' === typeof(_i.next)))) {
      return (_i);
    }
    /*@:171*/
    if ($24 = (('function' === typeof(_i)))) {
      return (_i());
    }
    /*@:173*/
    if ($25 = (_i[Symbol.iterator])) {
      return (_i[Symbol.iterator]());
    }
    /*@:175*/
    return (_i);
    /*@:176*/
  }
};
var $15g = prototype['iterate_op'] || function() {};
prototype['iterate_op'] = function(p) {
  var $_d, $_c, $40, $39, $38, $37, $36, $35, $34, $33, $32, $31, $30, $29, $28, $27, $26, _a = p,
    $ = this['iterate_op'] ? this : $bindfail('iterate_op'); {
    if ($27 = ((undefined === _a))) {
      return (_a);
    }
    /*@:186*/
    if ($28 = ($.mustIterate(_a))) {
      return ($.iterator_op(_a));
    }
    /*@:188*/
    if ($29 = (_a[Symbol.iterator])) {
      return (_a[Symbol.iterator]());
    }
    /*@:190*/
    if ($35 = ($.isArray(_a))) {
      return (function*(p) {
        {
          var $32 = _a,
            $31;
          if (undefined === $32) $32 = [];
          var $33 = $32.length;
          for ($31 = 0; $31 < $33; $31++) {
            $30 = $32[$31];
            yield($30);;
          }
        }
      }());
    }
    /*@:194*/
    if ($40 = ($.isObject(_a))) {
      return (function*(p) {
        {
          var $38 = _a,
            $37 = undefined;
          if (undefined === $38) $38 = {};
          for ($37 in $38) {
            $36 = $38[$37];
            yield([$37, $36]);;
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
prototype['kviterate_op'] = function(p) {
  var $_d, $_c, $64, $63, $62, $61, $60, $59, $58, $57, $56, $55, $54, $53, $52, $51, $50, $49, $48, $47, $46, $45, $44, $43, $42, $41, _a = p,
    $ = this['kviterate_op'] ? this : $bindfail('kviterate_op'); {
    if (!(_a)) {
      return (function*(p) {
        {;
        }
      }());
    }
    /*@:213*/
    if ($47 = ($.mustIterate(_a))) {
      return (function*(p) {
        {
          var $44 = $AI.iterator_op(_a);
          var $45 = $44.next();
          if (!$45.done)
            for (var $43 = 0; !$45.done; $45 = $44.next()) {
              $42 = $45.value;
              yield([$43, $42]);;
              $43++;
            }
        }
      }());
    }
    /*@:217*/
    if ($53 = (_a[Symbol.iterator])) {
      return (function*(p) {
        {
          var $50 = $AI.iterator_op(_a);
          var $51 = $50.next();
          if (!$51.done)
            for (var $49 = 0; !$51.done; $51 = $50.next()) {
              $48 = $51.value;
              yield([$49, $48]);;
              $49++;
            }
        }
      }());
    }
    /*@:221*/
    if ($59 = ($.isArray(_a))) {
      return (function*(p) {
        {
          var $56 = _a,
            $55;
          if (undefined === $56) $56 = [];
          var $57 = $56.length;
          for ($55 = 0; $55 < $57; $55++) {
            $54 = $56[$55];
            yield([$55, $54]);;
          }
        }
      }());
    }
    /*@:225*/
    if ($64 = ($.isObject(_a))) {
      return (function*(p) {
        {
          var $62 = _a,
            $61 = undefined;
          if (undefined === $62) $62 = {};
          for ($61 in $62) {
            $60 = $62[$61];
            yield([$61, $60]);;
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
prototype['collect_op'] = function(p) {
  var $_d, $_c, $71, $70, $69, $68, $67, _a, $66, $65, _i = p,
    $ = this['collect_op'] ? this : $bindfail('collect_op'); {
    if ($66 = ((undefined === _i))) {
      return (_i);
    }
    /*@:242*/
    if (!($.mustIterate(_i))) {
      return (_i);
      /*@:244*/
    }
    /*@:245*/
    _a = [];
    /*@:246*/
    var $69 = $AI.iterator_op(_i);
    var $70 = $69.next();
    if (!$70.done)
      for (var $68 = 0; !$70.done; $70 = $69.next()) {
        $67 = $70.value;
        _a.push($67);;
        $68++;
      }
    /*@:248*/
    return (_a);
    /*@:249*/
  }
};
var $18g = prototype['drain_op'] || function() {};
prototype['drain_op'] = function(p) {
  var $78, $77, $76, $75, $74, $73, $72, _i = p,
    $ = this['drain_op'] ? this : $bindfail('drain_op'); {
    if ($73 = ((undefined === _i))) {
      return (_i);
    }
    /*@:259*/
    if (!($.mustIterate(_i))) {
      return (_i);
      /*@:261*/
    }
    /*@:262*/
    var $76 = $AI.iterator_op(_i);
    var $77 = $76.next();
    if (!$77.done)
      for (var $75 = 0; !$77.done; $77 = $76.next()) {
        $74 = $77.value;; /*@:264*/ ;
        $75++;
      }
  }
};
var $19g = prototype['sort_op'] || function() {};
prototype['sort_op'] = function(p, _fn) {
  var $82, $81, $80, $79, _a = p,
    $ = this['sort_op'] ? this : $bindfail('sort_op'); {
    if ($80 = ($.isArray(_a))) {
      return (_a.slice(0).sort(_fn));
    }
    /*@:274*/
    if ($81 = ($.mustIterate(_a))) {
      return ($.collect_op(_a).sort(_fn));
    }
    /*@:276*/
    if ($82 = ($.isObject(_a))) {
      return ($.values_op(_a).sort(_fn));
    }
    /*@:278*/
    return (_a);
    /*@:279*/
  }
};
var $20g = prototype['enlist_op'] || function() {};
prototype['enlist_op'] = function(p) {
  var $_d, $_c, $96, $95, $94, $93, $92, $91, $90, $89, $88, $87, $86, _out, $85, $84, $83, _a = p,
    $ = this['enlist_op'] ? this : $bindfail('enlist_op'); {
    if ($84 = ((undefined === _a))) {
      return (_a);;
    }
    /*@:295*/
    if ($85 = ($.isArray(_a))) {
      return (_a);;
    }
    /*@:296*/
    _out = [];
    /*@:298*/
    if ($95 = ($.mustIterate(_a))) {
      var $88 = $AI.iterator_op(_a);
      var $89 = $88.next();
      if (!$89.done)
        for (var $87 = 0; !$89.done; $89 = $88.next()) {
          $86 = $89.value;
          _out.push($86);;
          $87++;
        }
    } else if ($96 = ($.isObject(_a))) {
      var $93 = _a,
        $92 = undefined;
      if (undefined === $93) $93 = {};
      for ($92 in $93) {
        $91 = $93[$92];
        _out.push([$92, $91]);;
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
prototype['entrait_op'] = function(p) {
  var $_d, $_c, $112, $111, $110, $109, $108, $107, $106, $105, $104, $103, $102, $101, $100, $99, _v, _k, _assign, _out, $98, $97, _a = p,
    $ = this['entrait_op'] ? this : $bindfail('entrait_op'); {
    if ($98 = ((undefined === _a))) {
      return (_a);;
    }
    /*@:323*/
    _out = [];
    /*@:325*/
    _assign = function(p, _v) {
      var _k = p; {
        if ($99 = (((_k !== undefined) && (_v !== undefined)))) {
          _out[_k] = _v;
          /*@:328*/
        }
      }
    };
    /*@:329*/
    if ($110 = ($.mustIterate(_a))) {
      var $102 = $AI.iterator_op(_a);
      var $103 = $102.next();
      if (!$103.done)
        for (var $101 = 0; !$103.done; $103 = $102.next()) {
          $100 = $103.value;
          _assign($100[0], $100[1]);;
          $101++;
        }
    } else if ($111 = ($.isArray(_a))) {
      var $107 = _a,
        $106;
      if (undefined === $107) $107 = [];
      var $108 = $107.length;
      for ($106 = 0; $106 < $108; $106++) {
        $105 = $107[$106];
        _assign($105[0], $105[1]);;
      }
    } else if ($112 = ($.isObject(_a))) {
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
prototype['alter_op'] = function(p, _fn) {
  var $113, _a = p,
    $ = this['alter_op'] ? this : $bindfail('alter_op'); {
    return (_fn(_a));
    /*@:350*/
  }
};
var $23g = prototype['observe_op'] || function() {};
prototype['observe_op'] = function(p, _fn) {
  var $_d, $_c, $114, _a = p,
    $ = this['observe_op'] ? this : $bindfail('observe_op'); {
    _fn(_a);
    /*@:359*/
    return (_a);
    /*@:360*/
  }
};
var $24g = prototype['audit_op'] || function() {};
prototype['audit_op'] = function(p, _fn) {
  var $_d, $_c, $132, $131, $130, $129, $128, $127, $126, $125, $124, $123, $122, $121, $120, $119, $118, $117, $116, $115, _a = p,
    $ = this['audit_op'] ? this : $bindfail('audit_op'); {
    if ($130 = ($.isArray(_a))) {
      var $118 = _a,
        $117;
      if (undefined === $118) $118 = [];
      var $119 = $118.length;
      for ($117 = 0; $117 < $119; $117++) {
        $116 = $118[$117];
        _fn($116, $117);;
      }
    } else if ($131 = ($.mustIterate(_a))) {
      return (function*(p) {
        {
          var $123 = $AI.iterator_op(_a);
          var $124 = $123.next();
          if (!$124.done)
            for (var $122 = 0; !$124.done; $124 = $123.next()) {
              $121 = $124.value;
              _fn($121, $122);
              /*@:377*/
              yield($121);;
              $122++;
            }
        }
      }());
    } else if ($132 = ($.isObject(_a))) {
      var $128 = _a,
        $127 = undefined;
      if (undefined === $128) $128 = {};
      for ($127 in $128) {
        $126 = $128[$127];
        _fn($126, $127);;
      }
    }
    /*@:381*/
    return (_a);
    /*@:382*/
  }
};
var $25g = prototype['concat_op'] || function() {};
prototype['concat_op'] = function(p, _b, _inplace) {
  var $_d, $_c, $174, $173, $172, $171, $170, $169, $168, $167, $166, $165, $164, $163, $162, $161, $160, $159, $158, $157, $156, $155, $154, $153, $152, $151, $150, $149, $148, $147, $146, $145, $144, $143, $142, $141, $140, $139, $138, $137, $136, $135, $134, $133, _a = p,
    $ = this['concat_op'] ? this : $bindfail('concat_op'); {
    if ($136 = ((undefined === _a))) {
      if ($134 = ((undefined === _b))) {
        return (undefined);;
      }
      /*@:414*/
      if ($135 = (($.isArray(_b) || $.mustIterate(_b)))) {
        return (_b);;
      }
      /*@:415*/
      return ([_b]);
      /*@:416*/
    }
    /*@:417*/
    if ($138 = ((undefined === _b))) {
      if ($137 = (($.isArray(_a) || $.mustIterate(_a)))) {
        return (_a);;
      }
      /*@:419*/
      return ([_a]);
      /*@:420*/
    }
    /*@:421*/
    if ($166 = ($.mustIterate(_a))) {
      if ($149 = ($.mustIterate(_b))) {
        return (function*(p) {
          {
            var $141 = $AI.iterator_op(_a);
            var $142 = $141.next();
            if (!$142.done)
              for (var $140 = 0; !$142.done; $142 = $141.next()) {
                $139 = $142.value;
                yield($139);;;
                $140++;
              }
            /*@:425*/
            var $146 = $AI.iterator_op(_b);
            var $147 = $146.next();
            if (!$147.done)
              for (var $145 = 0; !$147.done; $147 = $146.next()) {
                $144 = $147.value;
                yield($144);;;
                $145++;
              }
            /*@:426*/
          }
        }());
      }
      /*@:427*/
      if ($160 = ($.isArray(_b))) {
        _b = $AI.clone_op(_b);
        /*@:429*/
        return (function*(p) {
          {
            var $152 = $AI.iterator_op(_a);
            var $153 = $152.next();
            if (!$153.done)
              for (var $151 = 0; !$153.done; $153 = $152.next()) {
                $150 = $153.value;
                yield($150);;;
                $151++;
              }
            /*@:431*/
            var $157 = _b,
              $156;
            if (undefined === $157) $157 = [];
            var $158 = $157.length;
            for ($156 = 0; $156 < $158; $156++) {
              $155 = $157[$156];
              yield($155);;;
            }
            /*@:432*/
          }
        }());
      }
      /*@:433*/
      return (function*(p) {
        {
          var $163 = $AI.iterator_op(_a);
          var $164 = $163.next();
          if (!$164.done)
            for (var $162 = 0; !$164.done; $164 = $163.next()) {
              $161 = $164.value;
              yield($161);;;
              $162++;
            }
          /*@:435*/
          yield(_b);
          /*@:436*/
        }
      }());
    }
    /*@:437*/
    if ($167 = ((!($.isArray(_a))))) {
      _a = [_a];
    } else if (!(_inplace)) {
      _a = $AI.clone_op(_a);
      /*@:441*/
    }
    /*@:442*/
    if ($173 = ($.mustIterate(_b))) {
      var $170 = $AI.iterator_op(_b);
      var $171 = $170.next();
      if (!$171.done)
        for (var $169 = 0; !$171.done; $171 = $170.next()) {
          $168 = $171.value;
          _a.push($168);;;
          $169++;
        }
    } else if ($174 = ($.isArray(_b))) {
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
prototype['map_op'] = function(p, _fn) {
  var $_d, $_c, $193, $192, $191, $190, $189, $188, $187, $186, $185, $184, $183, $182, $181, $180, $179, $178, $177, _r, $176, $175, _a = p,
    $ = this['map_op'] ? this : $bindfail('map_op'); {
    if ($176 = ((undefined === _a))) {
      return (_a);;
    }
    /*@:461*/
    if ($182 = ($.isArray(_a))) {
      _r = [];
      /*@:464*/
      var $179 = _a,
        $178;
      if (undefined === $179) $179 = [];
      var $180 = $179.length;
      for ($178 = 0; $178 < $180; $178++) {
        $177 = $179[$178];
        _r[$178] = _fn($177, $178);;;
      }
      /*@:465*/
      return (_r);
      /*@:466*/
    }
    /*@:467*/
    if ($188 = ($.mustIterate(_a))) {
      return (function*(p) {
        {
          var $185 = $AI.iterator_op(_a);
          var $186 = $185.next();
          if (!$186.done)
            for (var $184 = 0; !$186.done; $186 = $185.next()) {
              $183 = $186.value;
              yield(_fn($183, $184));;;
              $184++;
            }
          /*@:470*/
        }
      }());
    }
    /*@:471*/
    if ($193 = ($.isObject(_a))) {
      _r = {};
      /*@:473*/
      var $191 = _a,
        $190 = undefined;
      if (undefined === $191) $191 = {};
      for ($190 in $191) {
        $189 = $191[$190];
        _r[$190] = _fn($189, $190);;;
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
prototype['filter_op'] = function(p, _fn) {
  var $_d, $_c, $215, $214, $213, $212, $211, $210, $209, $208, $207, $206, $205, $204, $203, $202, $201, $200, $199, $198, $197, $196, _r, $195, $194, _a = p,
    $ = this['filter_op'] ? this : $bindfail('filter_op'); {
    if ($195 = ((undefined === _a))) {
      return (_a);;
    }
    /*@:489*/
    if ($202 = ($.isArray(_a))) {
      _r = [];
      /*@:492*/
      var $199 = _a,
        $198;
      if (undefined === $199) $199 = [];
      var $200 = $199.length;
      for ($198 = 0; $198 < $200; $198++) {
        $197 = $199[$198];
        if ($196 = (_fn($197, $198))) {
          _r.push($197);;
        };;
      }
      /*@:493*/
      return (_r);
      /*@:494*/
    }
    /*@:495*/
    if ($209 = ($.mustIterate(_a))) {
      return (function*(p) {
        {
          var $206 = $AI.iterator_op(_a);
          var $207 = $206.next();
          if (!$207.done)
            for (var $205 = 0; !$207.done; $207 = $206.next()) {
              $204 = $207.value;
              if ($203 = (_fn($204, $205))) {
                yield($204);;
              };;
              $205++;
            }
          /*@:498*/
        }
      }());
    }
    /*@:499*/
    if ($215 = ($.isObject(_a))) {
      _r = {};
      /*@:501*/
      var $213 = _a,
        $212 = undefined;
      if (undefined === $213) $213 = {};
      for ($212 in $213) {
        $211 = $213[$212];
        if ($210 = (_fn($211, $212))) {
          _r[$212] = $211;;
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
prototype['reduce_op_fast'] = function(p, _fn, _accum) {
  var $_d, $_c, $225, $224, $223, $222, $221, $220, _step, $219, $218, _k, _l, $217, $216, _a = p,
    $ = this['reduce_op_fast'] ? this : $bindfail('reduce_op_fast'); {
    if ($217 = ((undefined === _a))) {
      return (_a);;
    }
    /*@:517*/
    if ($219 = ($.isArray(_a))) {
      _l = _a.length;
      /*@:520*/
      if (!(_l)) {
        return (_accum);;
      }
      /*@:521*/
      _k = 0;
      /*@:522*/
      var $218;
      while ($218 = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        /*@:524*/
        _k = (_k || 0) + 1;
      }
      /*@:525*/
      return (_accum);
      /*@:526*/
    }
    /*@:527*/
    if ($220 = ($.mustIterate(_a))) {
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
    if ($225 = ($.isObject(_a))) {
      var $223 = _a,
        $222 = undefined;
      if (undefined === $223) $223 = {};
      for ($222 in $223) {
        $221 = $223[$222];
        _accum = _fn(_accum, $221, $222);
        /*@:542*/
        ;
      }
      /*@:543*/
      return (_accum);
      /*@:544*/
    }
    /*@:546*/
    return ($.reduce_op([_a], _fn, _accum));
    /*@:547*/
  }
};
var $29g = prototype['reduce_op'] || function() {};
prototype['reduce_op'] = function(p, _fn, _accum) {
  var $_d, $_c, $239, $238, $237, $236, $235, $234, _init, $233, $232, _step, $231, $230, $229, $228, _k, _l, $227, $226, _a = p,
    $ = this['reduce_op'] ? this : $bindfail('reduce_op'); {
    if ($227 = ((undefined === _a))) {
      return (_a);;
    }
    /*@:559*/
    if ($230 = ($.isArray(_a))) {
      _l = _a.length;
      /*@:562*/
      if (!(_l)) {
        return (_accum);;
      }
      /*@:563*/
      _k = 0;
      /*@:564*/
      if ($228 = ((undefined === _accum))) {
        _accum = _a[_k];
        /*@:566*/
        _k = (_k || 0) + 1;
      }
      /*@:567*/
      var $229;
      while ($229 = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        /*@:569*/
        _k = (_k || 0) + 1;
      }
      /*@:570*/
      return (_accum);
      /*@:571*/
    }
    /*@:572*/
    if ($233 = ($.mustIterate(_a))) {
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
            if ($232 = ((undefined === _accum))) {
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
    if ($239 = ($.isObject(_a))) {
      _init = (undefined === _accum);
      /*@:590*/
      var $237 = _a,
        $236 = undefined;
      if (undefined === $237) $237 = {};
      for ($236 in $237) {
        $235 = $237[$236];
        if ($234 = (_init)) {
          _accum = $235;
          /*@:593*/
          _init = false;
        } else {
          _accum = _fn(_accum, $235, $236);
          /*@:596*/
        };
      }
      /*@:597*/
      return (_accum);
      /*@:598*/
    }
    /*@:600*/
    return ($.reduce_op([_a], _fn, _accum));
    /*@:601*/
  }
};
var $30g = prototype['slice_op'] || function() {};
prototype['slice_op'] = function(p, _st, _ct) {
  var $_d, $_c, $287, $286, $285, $284, $283, _v, _cache, $282, $281, $280, $279, $278, $277, $276, $275, _keep, _only, _size, _crop, _skip, $274, $273, $272, $271, $270, $269, $268, $267, $266, $265, $264, $263, $262, $261, $260, $259, $258, $257, $256, $255, $254, $253, $252, $251, $250, $249, $248, $247, $246, $245, _len, $244, $243, $242, $241, $240, _a = p,
    $ = this['slice_op'] ? this : $bindfail('slice_op'); {
    if ($241 = ((undefined === _a))) {
      return (_a);;
    }
    /*@:634*/
    if ($253 = ($.isString(_a))) {
      if ($242 = ((_ct === 0))) {
        return ('');
      }
      /*@:638*/
      if ($243 = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
        return (_a);
      }
      /*@:640*/
      if ($244 = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
        return (_a.substring(0, _ct));
      }
      /*@:642*/
      _len = _a.length;
      /*@:643*/
      if ($249 = (((undefined === _st) && (_ct < 0)))) {
        return (_a.substring((_len + _ct), _len));
      } else if ($250 = (((0 === _st) && (_ct < 0)))) {
        return (_a.substring(0, (_len + _ct)));
      } else if ($251 = ((_st > 0))) {
        if ($245 = ((_ct < 0))) {
          return (_a.substring(_st, (_len + _ct)));
        } else if ($246 = ((_ct > 0))) {
          return (_a.substring(_st, (_st + _ct)));
        } else {
          return (_a.substring(_st, _len));
        }
      } else if ($252 = ((_st < 0))) {
        if ($247 = ((_ct < 0))) {
          return (_a.substring((_len + _st), (_len + _ct)));
        } else if ($248 = ((_ct > 0))) {
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
    if ($255 = ((_ct === 0))) {
      if ($254 = ($.mustIterate(_a))) {
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
    if (!(($.mustIterate(_a) || $.isArray(_a)))) {
      _a = [_a];
      /*@:673*/
    }
    /*@:675*/
    if ($257 = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
      if ($256 = ($.isArray(_a))) {
        return ($AI.clone_op(_a));
      } else {
        return (_a);
        /*@:680*/
      }
    }
    /*@:682*/
    if ($265 = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
      if ($264 = ($.isArray(_a))) {
        return (_a.slice(0, _ct));
      } else {
        return (function*(p) {
          {
            var $261 = $AI.iterator_op(_a);
            var $262 = $261.next();
            if (!$262.done)
              for (var $260 = 0; !$262.done; $262 = $261.next()) {
                $259 = $262.value;
                if ($258 = (($260 < _ct))) {
                  yield($259);;
                } else {
                  break;;
                }
                /*@:690*/
                ;
                $260++;
              }
          }
        }());
      }
    }
    /*@:691*/
    if ($274 = ($.isArray(_a))) {
      _len = _a.length;
      /*@:693*/
      if ($270 = (((undefined === _st) && (_ct < 0)))) {
        return (_a.slice((_len + _ct), _len));
      } else if ($271 = (((0 === _st) && (_ct < 0)))) {
        return (_a.slice(0, (_len + _ct)));
      } else if ($272 = ((_st > 0))) {
        if ($266 = ((_ct < 0))) {
          return (_a.slice(_st, (_len + _ct)));
        } else if ($267 = ((_ct > 0))) {
          return (_a.slice(_st, (_st + _ct)));
        } else {
          return (_a.slice(_st, _len));
        }
      } else if ($273 = ((_st < 0))) {
        if ($268 = ((_ct < 0))) {
          return (_a.slice((_len + _st), (_len + _ct)));
        } else if ($269 = ((_ct > 0))) {
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
    if ($279 = (((undefined === _st) && (_ct < 0)))) {
      _keep = false;
      /*@:723*/
      _size = (0 - (_ct));
    } else if ($280 = ((_st < 0))) {
      _keep = false;
      /*@:726*/
      _size = (0 - (_st));
      /*@:727*/
      if ($275 = ((_ct < 0))) {
        _crop = (0 - (_ct));
      } else if ($276 = ((_ct > 0))) {
        _crop = (_size - _ct);
      }
    } else if ($281 = ((_st > 0))) {
      _skip = _st;
      /*@:733*/
      if ($277 = ((_ct < 0))) {
        _size = (0 - (_ct));
        /*@:735*/
        _crop = (0 - (_ct));
      } else if ($278 = ((_ct > 0))) {
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
          if ($286 = ((_cache.length > _size))) {
            var $285 = _cache.shift();
            if ($284 = (_keep)) {
              if ($283 = ((_only <= 0))) {
                return;;
              }
              /*@:756*/
              _only--;
              /*@:757*/
              yield($285);
            };
          }
          /*@:758*/
          _v = _a.next();
        }
        /*@:759*/
        var $287;
        while ($287 = ((_cache.length > _crop))) {
          yield(_cache.shift());
          /*@:761*/
        }
      }
    }());
  }
};
var $31g = prototype['element_op'] || function() {};
prototype['element_op'] = function(p, _index) {
  var $292, $291, $290, $289, $288, _a = p,
    $ = this['element_op'] ? this : $bindfail('element_op'); {
    if ($289 = ((undefined === _a))) {
      return (_a);;
    }
    /*@:770*/
    if ($290 = ($.isArray(_a))) {
      return (_a[_index]);
    }
    /*@:772*/
    if ($291 = ($.mustIterate(_a))) {
      return ($.slice_op(_a, _index, 1).next().value);
    }
    /*@:774*/
    if ($292 = (((_index === 0) || (_index === (0 - (1)))))) {
      return (_a);
    }
    /*@:776*/
    return (undefined);
    /*@:777*/
  }
};
var $32g = prototype['clone_op'] || function() {};
prototype['clone_op'] = function(p) {
  var $299, $298, $297, $296, $295, _b, $294, $293, _a = p,
    $ = this['clone_op'] ? this : $bindfail('clone_op'); {
    if ($294 = ($.isArray(_a))) {
      return (_a.slice(0));
    }
    /*@:787*/
    if ($299 = ($.isObject(_a))) {
      _b = {};
      /*@:789*/
      var $297 = _a,
        $296 = undefined;
      if (undefined === $297) $297 = {};
      for ($296 in $297) {
        $295 = $297[$296];
        _b[$296] = $295;;
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
prototype['overlay_op'] = function(p, _r) {
  var $_d, $_c, $_b, _v, _i, $331, _vr, _vl, $330, $329, $328, $327, $326, $325, $324, $323, $322, $321, $320, $319, $318, $317, $316, $315, $314, $313, $312, $311, $310, $309, $308, $307, $306, $305, $304, $303, $302, $301, $300, _l = p,
    $ = this['overlay_op'] ? this : $bindfail('overlay_op'); {
    if ($301 = ((undefined === _l))) {
      _l = {};
      /*@:807*/
    }
    /*@:808*/
    if ($302 = ((!($.isMergable(_l))))) {
      throw new Error('SAI: Attempt to OVERLAY onto something that\'s not a collection/iterable.');
    }
    /*@:810*/
    if ($303 = ((!($.isMergable(_r))))) {
      throw new Error('SAI: Attempt to OVERLAY with something that\'s not a collection/iterable.');
      /*@:812*/
    }
    /*@:813*/
    if (!($.mustIterate(_l))) {
      _l = $AI.clone_op(_l);
      /*@:815*/
      if ($316 = ($.mustIterate(_r))) {
        if ($315 = ($.isArray(_l))) {
          return (function*(p) {
            {
              var $306 = $AI.iterator_op(_r);
              var $307 = $306.next();
              if (!$307.done)
                for (var $305 = 0; !$307.done; $307 = $306.next()) {
                  $304 = $307.value;
                  yield(((undefined !== ($_b = $304)) ? $_b : _l[$305]));;
                  $305++;
                }
            }
          }());
        } else {
          var $312 = $AI.iterator_op(_r);
          var $313 = $312.next();
          if (!$313.done)
            for (var $311 = 0; !$313.done; $313 = $312.next()) {
              $310 = $313.value;
              if (undefined !== ($309 = ($310))) {
                _l[$311] = $309;
              };
              $311++;
            }
          /*@:824*/
          return (_l);
          /*@:825*/
        }
      }
      /*@:826*/
      if ($328 = ($.isObject(_r))) {
        var $320 = _r,
          $319 = undefined;
        if (undefined === $320) $320 = {};
        for ($319 in $320) {
          $318 = $320[$319];
          if ($317 = (($318 !== undefined))) {
            _l[$319] = $318;
          };
        }
      } else {
        var $325 = _r,
          $324;
        if (undefined === $325) $325 = [];
        var $326 = $325.length;
        for ($324 = 0; $324 < $326; $324++) {
          $323 = $325[$324];
          if ($322 = (($323 !== undefined))) {
            _l[$324] = $323;
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
    if ($331 = ($.mustIterate(_r))) {
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
prototype['select_op'] = function(p, _manifest) {
  var $_d, $_c, $394, $393, $392, $391, $390, $389, $388, $387, $386, $385, $384, $383, $382, $381, $380, $379, $378, $377, $376, $375, $374, $373, $372, $371, $370, $369, $368, _i, $367, $366, $365, $364, $363, $362, $361, $360, $359, $358, $357, $356, $355, $354, $353, $352, $351, _buffer, _l, $350, $349, $348, $347, $346, $345, $344, $343, $342, $341, $340, $339, $338, $337, $336, $335, $334, _result, $333, $332, _src = p,
    $ = this['select_op'] ? this : $bindfail('select_op'); {
    if (!($.isMergable(_src))) {
      throw new Error('SAI: Left argument to SELECT must be list/traits/iterable.');
      /*@:869*/
    }
    /*@:870*/
    if (!($.isMergable(_manifest))) {
      if ($333 = ((undefined === _manifest))) {
        return (_manifest);;
      }
      /*@:872*/
      _manifest = [_manifest];
      /*@:873*/
    }
    /*@:874*/
    if ($375 = ($.isArray(_src))) {
      if ($344 = ($.isArray(_manifest))) {
        _result = [];
        /*@:877*/
        var $336 = _manifest,
          $335;
        if (undefined === $336) $336 = [];
        var $337 = $336.length;
        for ($335 = 0; $335 < $337; $335++) {
          $334 = $336[$335];
          _result.push(_src[$334]);;
        }
        /*@:879*/
        return (_result);
        /*@:880*/
      } else if ($345 = ($.mustIterate(_manifest))) {
        _src = $AI.clone_op(_src);
        /*@:883*/
        return (function*(p) {
          {
            var $341 = $AI.iterator_op(_manifest);
            var $342 = $341.next();
            if (!$342.done)
              for (var $340 = 0; !$342.done; $342 = $341.next()) {
                $339 = $342.value;
                yield(_src[$339]);
                /*@:886*/
                ;
                $340++;
              }
          }
        }());
      }
      /*@:887*/
      _result = [];
      /*@:888*/
      var $348 = _manifest,
        $347 = undefined;
      if (undefined === $348) $348 = {};
      for ($347 in $348) {
        $346 = $348[$347];
        _result.push(_src[$347]);;
      }
      /*@:890*/
      return (_result);
      /*@:891*/
    } else if ($376 = ($.mustIterate(_src))) {
      if ($357 = ($.mustIterate(_manifest))) {
        $350 = _src;
        _src = $AI.iterate_op($350);
        /*@:895*/
        return (function*(p) {
          {
            _l = _src.next();
            /*@:897*/
            _buffer = [];
            /*@:898*/
            var $354 = $AI.iterator_op(_manifest);
            var $355 = $354.next();
            if (!$355.done)
              for (var $353 = 0; !$355.done; $355 = $354.next()) {
                $352 = $355.value;
                var $351;
                while ($351 = (((!(_l.done)) && (_buffer.length <= $352)))) {
                  _buffer.push(_l.value);
                  /*@:901*/
                  _l = _src.next();
                }
                /*@:902*/
                yield(_buffer[$352]);
                /*@:903*/
                ;
                $353++;
              }
          }
        }());
      }
      /*@:904*/
      if ($365 = ($.isArray(_manifest))) {
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
            var $362 = _manifest,
              $361;
            if (undefined === $362) $362 = [];
            var $363 = $362.length;
            for ($361 = 0; $361 < $363; $361++) {
              $360 = $362[$361];
              var $359;
              while ($359 = (((!(_l.done)) && (_buffer.length <= $360)))) {
                _buffer.push(_l.value);
                /*@:913*/
                _l = _src.next();
              }
              /*@:914*/
              yield(_buffer[$360]);
              /*@:915*/
              ;
            }
          }
        }());
      }
      /*@:916*/
      _manifest = $AI.sort_op($AI.map_op($AI.keys_op(_manifest), function($366, $367) {
        return ($AI.number_op($366));
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
          var $372 = $AI.iterator_op(_src);
          var $373 = $372.next();
          if (!$373.done)
            for (var $371 = 0; !$373.done; $373 = $372.next()) {
              $370 = $373.value;
              if ($369 = (($371 === _manifest[_i]))) {
                yield($370);
                /*@:922*/
                _i = (_i || 0) + 1;
                /*@:923*/
                if ($368 = ((_i >= _manifest.length))) {
                  return;;
                }
                /*@:924*/
              };
              $371++;
            }
        }
      }());
    }
    /*@:925*/
    if ($383 = ($.mustIterate(_manifest))) {
      _src = $AI.clone_op(_src);
      /*@:927*/
      return (function*(p) {
        {
          var $380 = $AI.iterator_op(_manifest);
          var $381 = $380.next();
          if (!$381.done)
            for (var $379 = 0; !$381.done; $381 = $380.next()) {
              $378 = $381.value;
              if ($377 = (($378 !== undefined))) {
                yield(_src[$378]);
                /*@:931*/
              };
              $379++;
            }
        }
      }());
    }
    /*@:932*/
    _result = {};
    /*@:933*/
    if ($389 = ($.isArray(_manifest))) {
      var $386 = _manifest,
        $385;
      if (undefined === $386) $386 = [];
      var $387 = $386.length;
      for ($385 = 0; $385 < $387; $385++) {
        $384 = $386[$385];
        _result[$384] = _src[$384];;
      }
      /*@:936*/
      return (_result);
      /*@:937*/
    }
    /*@:938*/
    if ($394 = ($.isObject(_manifest))) {
      var $392 = _manifest,
        $391 = undefined;
      if (undefined === $392) $392 = {};
      for ($391 in $392) {
        $390 = $392[$391];
        _result[$391] = _src[$391];
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
prototype['update_op'] = function(p, _manifest) {
  var $415, $414, $413, $412, $411, $410, $409, $408, $407, $406, $405, $404, $403, $402, $401, $400, $399, $398, $397, $396, $395, _dest = p,
    $ = this['update_op'] ? this : $bindfail('update_op'); {
    if ($396 = ((undefined === _dest))) {
      _dest = {};
      /*@:959*/
    }
    /*@:960*/
    if (!(($.isArray(_dest) || $.isObject(_dest)))) {
      throw new Error('Attempt to UPDATE into something that\'s not a list or traits.');
      /*@:962*/
    }
    /*@:963*/
    if (!($.isMergable(_manifest))) {
      throw new Error('Attempt to UPDATE from something that\'s not a list or traits.');
      /*@:965*/
    }
    /*@:966*/
    if ($414 = ($.mustIterate(_manifest))) {
      var $400 = $AI.iterator_op(_manifest);
      var $401 = $400.next();
      if (!$401.done)
        for (var $399 = 0; !$401.done; $401 = $400.next()) {
          $398 = $401.value;
          if ($397 = (($398 !== undefined))) {
            _dest[$399] = $398;;
          }
          /*@:969*/
          ;
          $399++;
        }
    } else if ($415 = ($.isArray(_manifest))) {
      var $406 = _manifest,
        $405;
      if (undefined === $406) $406 = [];
      var $407 = $406.length;
      for ($405 = 0; $405 < $407; $405++) {
        $404 = $406[$405];
        if ($403 = (($404 !== undefined))) {
          _dest[$405] = $404;;
        }
        /*@:973*/
        ;
      }
    } else {
      var $412 = _manifest,
        $411 = undefined;
      if (undefined === $412) $412 = {};
      for ($411 in $412) {
        $410 = $412[$411];
        if ($409 = (($410 !== undefined))) {
          _dest[$411] = $410;;
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
prototype['delete_op'] = function(p, _manifest, _clone) {
  var $_d, $_c, $447, $446, $445, $444, $443, $442, $441, $440, $439, $438, $437, $436, $435, $434, $433, $432, $431, $430, $429, $428, $427, $426, $425, $424, $423, $422, $421, $420, $419, _deletel, _ignore, _deleter, _index, _splicer, $418, $417, $416, _dest = p,
    $ = this['delete_op'] ? this : $bindfail('delete_op'); {
    if ($417 = ($.mustIterate(_dest))) {
      throw new Error('SAI: Attempt to DELETE from an iterator, which is not presently supported.');
    }
    /*@:993*/
    if (!($.isObject(_dest))) {
      throw new Error('SAI: Attempt to DELETE from something that\'s not a list or traits.');
      /*@:995*/
    }
    /*@:996*/
    if ($418 = (_clone)) {
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
    if ($447 = ($.isArray(_dest))) {
      if (!($.isMergable(_manifest))) {
        _splicer(_manifest);
      } else if ($431 = ($.isArray(_manifest))) {
        var $420 = _manifest,
          $419;
        if (undefined === $420) $420 = [];
        var $421 = $420.length;
        for ($419 = 0; $419 < $421; $419++) {
          _splicer($420[$419], $419, $420);
        }
      } else if ($432 = ($.mustIterate(_manifest))) {
        var $424 = $AI.iterator_op(_manifest);
        var $425 = $424.next();
        var $423 = 0;
        if (!$425.done)
          do {
            _splicer($425.value, $423);
            $423++;
            $425 = $424.next();
          } while (!$425.done);
      } else {
        var $429 = _manifest,
          $428 = undefined;
        if (undefined === $429) $429 = {};
        for ($428 in $429) {
          $427 = $429[$428];
          let _index = parseInt($428);
          /*@:1020*/
          if (!(isNaN(_index))) {
            _dest.splice(_index, 1);
            /*@:1022*/
          };
        }
      }
    } else {
      if (!($.isMergable(_manifest))) {
        delete _dest[_manifest];
      } else if ($444 = ($.isArray(_manifest))) {
        var $434 = _manifest,
          $433;
        if (undefined === $434) $434 = [];
        var $435 = $434.length;
        for ($433 = 0; $433 < $435; $433++) {
          _deletel($434[$433], $433, $434);
        }
      } else if ($445 = ($.mustIterate(_manifest))) {
        var $438 = $AI.iterator_op(_manifest);
        var $439 = $438.next();
        var $437 = 0;
        if (!$439.done)
          do {
            _deletel($439.value, $437);
            $437++;
            $439 = $438.next();
          } while (!$439.done);
      } else if ($446 = ($.isObject(_manifest))) {
        var $442 = _manifest,
          $441 = undefined;
        if (undefined === $442) $442 = {};
        for ($441 in $442) {
          _deleter($442[$441], $441, $442);
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
prototype['deepFreeze'] = function(p) {
  var $_d, $_c, $455, $454, $453, $452, $451, $450, $449, $448, _o = p,
    $ = this['deepFreeze'] ? this : $bindfail('deepFreeze'); {
    Object.freeze(_o);
    /*@:1045*/
    var $454 = _o,
      $453 = undefined;
    if (undefined === $454) $454 = {};
    for ($453 in $454) {
      $452 = $454[$453];
      if ($449 = ((!(_o.hasOwnProperty($453))))) {
        continue;;
      }
      /*@:1047*/
      if ($450 = (('object' !== typeof($452)))) {
        continue;;
      }
      /*@:1048*/
      if ($451 = (Object.isFrozen($452))) {
        continue;;
      }
      /*@:1049*/
      $.deepFreeze($452);
      /*@:1050*/
      ;
    }
  }
};
var $38g = prototype['l_op'] || function() {};
prototype['l_op'] = function(p, _a) {
  var $491, $490, $489, $488, $487, $486, $485, $484, $483, $482, $481, $480, $479, $478, $477, $476, $475, $474, $473, $472, $471, $470, $469, $468, $467, $466, $465, $464, $463, $462, $461, $460, $459, $458, $457, $456, _op = p,
    $ = this['l_op'] ? this : $bindfail('l_op'); {
    switch ($491 = (_op)) {
      case 'and':
        if ($468 = ($.isArray(_a))) {
          var $459 = _a,
            $458;
          if (undefined === $459) $459 = [];
          var $460 = $459.length;
          for ($458 = 0; $458 < $460; $458++) {
            $457 = $459[$458];
            if (!($457)) {
              return (undefined);;
            };
          }
          if ($458 === 0) {
            return (undefined);
          }
          /*@:1065*/
          return (_a);
        } else if ($469 = ($.mustIterate(_a))) {
          return (function*(p) {
            {
              var $463 = $AI.iterator_op(_a);
              var $464 = $463.next();
              if ($464.done) {
                yield(false);
              } else
                for (var $462 = 0; !$464.done; $464 = $463.next()) {
                  $461 = $464.value;
                  if (!($461)) {
                    yield(false);;
                  };
                  $462++;
                }
              /*@:1072*/
              yield(true);
            }
          });
        } else if ($470 = ($.isObject(_a))) {
          var $467 = _a,
            $466 = undefined;
          if (undefined === $467) $467 = {};
          for ($466 in $467) {
            $465 = $467[$466];
            if (!($465)) {
              return (undefined);;
            };
          }
          if ($466 === undefined) {
            return (undefined);
          }
          /*@:1078*/
          return (_a);
        } else {
          return (((_a) ? (_a) : (undefined)));
          /*@:1081*/
        }
        break;
      case 'or':
        if ($488 = ($.isArray(_a))) {
          var $474 = _a,
            $473;
          if (undefined === $474) $474 = [];
          var $475 = $474.length;
          for ($473 = 0; $473 < $475; $473++) {
            $472 = $474[$473];
            if ($471 = ($472)) {
              return ($472);;
            };
          }
          /*@:1086*/
          return (undefined);
        } else if ($489 = ($.mustIterate(_a))) {
          return (function*(p) {
            {
              var $480 = $AI.iterator_op(_a);
              var $481 = $480.next();
              if (!$481.done)
                for (var $479 = 0; !$481.done; $481 = $480.next()) {
                  $478 = $481.value;
                  if ($477 = ($478)) {
                    yield($478);;
                  };
                  $479++;
                }
              /*@:1091*/
              yield(undefined);
            }
          });
        } else if ($490 = ($.isObject(_a))) {
          var $486 = _a,
            $485 = undefined;
          if (undefined === $486) $486 = {};
          for ($485 in $486) {
            $484 = $486[$485];
            if ($483 = ($484)) {
              return ($484);;
            };
          }
          /*@:1095*/
          return (undefined);
        } else {
          return (((_a) ? (_a) : (undefined)));
          /*@:1098*/
        }
        break;
      case 'nor':
        return ((!($.l_op('or', _a))));
        /*@:1101*/
        break;
      case 'nand':
        return ((!($.l_op('and', _a))));
        /*@:1104*/
        break;
      default:
        throw new Error('SAI Runtime: unknown logical operator ' + _op + ' in sailib.l_op');
        /*@:1107*/
        break;
    }
  }
};
var $39g = prototype['xor_op'] || function() {};
prototype['xor_op'] = function(p, _b) {
  var $492, _a = p,
    $ = this['xor_op'] ? this : $bindfail('xor_op'); {
    return (((_a) ? (((_b) ? (false) : (_a))) : (((_b) ? (_b) : (false)))));
    /*@:1117*/
  }
};
var $40g = prototype['min_op'] || function() {};
prototype['min_op'] = function(p, _b) {
  var $493, _a = p,
    $ = this['min_op'] ? this : $bindfail('min_op'); {
    return ((((_a < _b)) ? (_a) : (_b)));
    /*@:1126*/
  }
};
var $41g = prototype['max_op'] || function() {};
prototype['max_op'] = function(p, _b) {
  var $494, _a = p,
    $ = this['max_op'] ? this : $bindfail('max_op'); {
    return ((((_a > _b)) ? (_a) : (_b)));
    /*@:1135*/
  }
};
var $42g = prototype['compare_op'] || function() {};
prototype['compare_op'] = function(p, _b) {
  var $497, $496, $495, _a = p,
    $ = this['compare_op'] ? this : $bindfail('compare_op'); {
    if ($496 = ((_a < _b))) {
      return ((0 - (1)));;
    }
    /*@:1146*/
    if ($497 = ((_a > _b))) {
      return (1);;
    }
    /*@:1147*/
    return (0);
    /*@:1148*/
  }
};
var $43g = prototype['keys_op'] || function() {};
prototype['keys_op'] = function(p) {
  var $_d, $_c, $514, $513, $512, $511, $510, $509, $508, $507, $506, $505, $504, $503, $502, $501, $500, $499, _result, $498, _a = p,
    $ = this['keys_op'] ? this : $bindfail('keys_op'); {
    _result = [];
    /*@:1157*/
    if ($512 = ($.isArray(_a))) {
      var $499 = 0,
        $500 = _a.length,
        $501 = 1;
      if ($501 <= 0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");
      for (; $499 < $500; $499 = $499 + $501) {
        _result.push($499);;
      }
    } else if ($513 = ($.mustIterate(_a))) {
      var $505 = $AI.iterator_op(_a);
      var $506 = $505.next();
      if (!$506.done)
        for (var $504 = 0; !$506.done; $506 = $505.next()) {
          $503 = $506.value;
          _result.push($504);;
          $504++;
        }
    } else if ($514 = ($.isObject(_a))) {
      var $510 = _a,
        $509 = undefined;
      if (undefined === $510) $510 = {};
      for ($509 in $510) {
        $508 = $510[$509];
        _result.push($509);;
      }
    }
    /*@:1166*/
    return (_result);
    /*@:1167*/
  }
};
var $44g = prototype['count_op'] || function() {};
prototype['count_op'] = function(p) {
  var $528, $527, $526, $525, $524, $523, $522, $521, $520, $519, $518, $517, _i, $516, $515, _a = p,
    $ = this['count_op'] ? this : $bindfail('count_op'); {
    if ($516 = ($.isArray(_a))) {
      return (_a.length);
    }
    /*@:1177*/
    _i = 0;
    /*@:1178*/
    if ($522 = ($.mustIterate(_a))) {
      var $519 = $AI.iterator_op(_a);
      var $520 = $519.next();
      if (!$520.done)
        for (var $518 = 0; !$520.done; $520 = $519.next()) {
          $517 = $520.value;
          _i = (_i || 0) + 1;;
          $518++;
        }
      /*@:1181*/
      return (_i);
    }
    /*@:1182*/
    if ($527 = ($.isObject(_a))) {
      var $525 = _a,
        $524 = undefined;
      if (undefined === $525) $525 = {};
      for ($524 in $525) {
        $523 = $525[$524];
        _i = (_i || 0) + 1;;
      }
      /*@:1185*/
      return (_i);
    }
    /*@:1186*/
    if ($528 = ((_a === undefined))) {
      return (0);
    }
    /*@:1188*/
    return (1);
    /*@:1189*/
  }
};
var $45g = prototype['values_op'] || function() {};
prototype['values_op'] = function(p) {
  var $_d, $_c, $537, $536, $535, $534, $533, $532, _result, $531, $530, $529, _a = p,
    $ = this['values_op'] ? this : $bindfail('values_op'); {
    if ($530 = ($.isArray(_a))) {
      return ($AI.clone_op(_a));
    }
    /*@:1199*/
    if ($531 = ($.mustIterate(_a))) {
      return ($.collect_op(_a));
    }
    /*@:1201*/
    _result = [];
    /*@:1202*/
    if ($536 = ($.isObject(_a))) {
      var $534 = _a,
        $533 = undefined;
      if (undefined === $534) $534 = {};
      for ($533 in $534) {
        $532 = $534[$533];
        _result.push($532);;
      }
      /*@:1205*/
      return (_result);
    }
    /*@:1206*/
    if ($537 = ((undefined !== _a))) {
      _result.push(_a);
    }
    /*@:1208*/
    return (_result);
    /*@:1209*/
  }
};
var $46g = prototype['newerror'] || function() {};
prototype['newerror'] = function(p, _file, _parameters) {
  var $542, $541, $540, $539, _e, $538, _line = p,
    $ = this['newerror'] ? this : $bindfail('newerror'); {
    _e = new Error(_parameters.message, _file, _line);
    /*@:1218*/
    var $541 = _parameters,
      $540 = undefined;
    if (undefined === $541) $541 = {};
    for ($540 in $541) {
      $539 = $541[$540];
      _e[$540] = $539;;
    }
    /*@:1220*/
    return (_e);
    /*@:1221*/
  }
};
var $47g = prototype['number_op'] || function() {};
prototype['number_op'] = function(p) {
  var _n, $543, _x = p,
    $ = this['number_op'] ? this : $bindfail('number_op'); {
    _n = parseFloat(_x);
    /*@:1230*/
    return (((isNaN(_n)) ? (0) : (_n)));
    /*@:1231*/
  }
};
var $48g = prototype['expects_op'] || function() {};
prototype['expects_op'] = function(p, _prototype) {
  var $_d, $_c, $552, $551, $550, $549, $548, $547, $546, $545, _type, _name, _param, _tester, _result, $544, _params = p,
    $ = this['expects_op'] ? this : $bindfail('expects_op'); {
    _result = [];
    /*@:1240*/
    _tester = function(p, _name, _type) {
      var _param = p; {
        if ($546 = ((_type === typeof(_param)))) {;
        } else if ($547 = ((_param.isof && _param.isof[_type]))) {;
        } else {
          if ($545 = (_param.isa)) {
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
            /*@:1251*/
          }
        }
      }
    };
    /*@:1252*/
    var $551 = _prototype,
      $550 = undefined;
    if (undefined === $551) $551 = {};
    for ($550 in $551) {
      _type = $551[$550];
      if ($548 = (($550 === '_root'))) {
        _tester(_params, 'Root', _type);
      } else if (!(_params.hasOwnProperty($550))) {
        _result.push({
          trait: $550,
          'expects': _type,
          found: 'missing'
        });
      } else if ($549 = ((_type !== true))) {
        _tester(_params[$550], $550, _type);
        /*@:1259*/
      };
    }
    /*@:1260*/
    return (_result);
    /*@:1261*/
  }
};
var $49g = prototype['expectsThrow'] || function() {};
prototype['expectsThrow'] = function(p, _prototype, _name) {
  var $_d, $_c, $557, $556, $555, $554, _err, _x, $553, _params = p,
    $ = this['expectsThrow'] ? this : $bindfail('expectsThrow'); {
    _x = $.expects_op(_params, _prototype);
    /*@:1270*/
    if (!(_x.length)) {
      return;;
    }
    /*@:1271*/
    _err = [];
    /*@:1272*/
    var $556 = _x,
      $555 = undefined;
    if (undefined === $556) $556 = {};
    for ($555 in $556) {
      $554 = $556[$555];
      _err.push('' + $554.trait + ' should be ' + ((($554.expects === 'true')) ? ('existence') : ($554.expects)) + ' but is instead ' + $554.found);;
    }
    /*@:1274*/
    throw new Error('SAI: parameter exception in ' + _name + '\n' + _err.join('\n'));
    /*@:1275*/
  }
};
var $50g = prototype['finalizePrototype'] || function() {};
prototype['finalizePrototype'] = function(p) {
  var $_d, $_c, $573, $572, _obj, $571, $570, $569, $568, $567, $566, $565, $564, $563, $562, $561, $560, $559, $558, _proto = p,
    $ = this['finalizePrototype'] ? this : $bindfail('finalizePrototype'); {
    var $561 = _proto.__tobelocked,
      $560 = undefined;
    if (undefined === $561) $561 = {};
    for ($560 in $561) {
      $559 = $561[$560];
      Object.defineProperty(_proto, $559, {
        configurable: false
      });;
    }
    /*@:1288*/
    delete _proto.__tobelocked;
    /*@:1289*/
    var $565 = _proto.__tobefrozen,
      $564 = undefined;
    if (undefined === $565) $565 = {};
    for ($564 in $565) {
      $563 = $565[$564];
      $.deepFreeze(_proto[$563]);;
    }
    /*@:1292*/
    delete _proto.__tobefrozen;
    /*@:1293*/
    if ($571 = (_proto.__unverified)) {
      var $569 = _proto.__contracts,
        $568 = undefined;
      if (undefined === $569) $569 = {};
      for ($568 in $569) {
        $567 = $569[$568];
        if (!(_proto.hasOwnProperty($567))) {
          throw new Error('SAI: Contractually required trait ' + $567 + ' does not exist in object ' + _proto.isa + '.');
        };
      }
      /*@:1298*/
      delete _proto.__unverified;
      /*@:1299*/
      delete _proto.__contracts;
      /*@:1300*/
    }
    /*@:1301*/
    _proto.constructor = function(p) {
      {
        _obj = Object.create(_proto);
        /*@:1303*/
        if ($572 = (_obj.Constructor)) {
          _obj.Constructor();;
        }
        /*@:1304*/
        if ($573 = (_obj.Instantiate)) {
          _obj.Instantiate.apply(_obj, arguments);;
        }
        /*@:1305*/
        return (_obj);
        /*@:1306*/
      }
    };
  }
};
var $51g = prototype['create_op_base'] || function() {};
prototype['create_op_base'] = function(p, _parameters) {
  var $_d, $_c, $577, $576, _obj, _mod, $575, _src, _fn, _proto, $574, _name = p,
    $ = this['create_op_base'] ? this : $bindfail('create_op_base'); {
    _proto = $._protocache[_name];
    /*@:1316*/
    if (!(_proto)) {
      _fn = (_name + '.js');
      /*@:1318*/
      _src = _FS.readFileSync(_fn, 'utf8');
      /*@:1319*/
      if ($575 = ($AI.slice_op(('#!' === _src), 0, 2))) {
        _src = _src.replace(/\#\![^\r\n\u0085\u2028\u2029]+/, '');
      }
      /*@:1321*/
      _src = '(function(exports, require, module, __filename, __dirname) {' + _src + '});';
      /*@:1322*/
      _mod = eval(_src);
      /*@:1323*/
      _proto = _mod({}, require, {}, _fn, __dirname);
      /*@:1324*/
      $._protocache[_name] = _proto;
      /*@:1325*/
    }
    /*@:1326*/
    if (!(_proto)) {
      throw new Error('SAI.Create: Do not know how to create SAI object ' + _name + '.');
      /*@:1328*/
    }
    /*@:1329*/
    _obj = Object.create(_proto);
    /*@:1330*/
    if ($576 = (_obj.Constructor)) {
      _obj.Constructor();;
    }
    /*@:1331*/
    if ($577 = (_obj.Instantiate)) {
      _obj.Instantiate.apply(_obj, _parameters);;
    }
    /*@:1332*/
    return (_obj);
    /*@:1333*/
  }
};
var $52g = prototype['singleton_op'] || function() {};
prototype['singleton_op'] = function(p, _parameters) {
  var $_d, $_c, $578, _name = p,
    $ = this['singleton_op'] ? this : $bindfail('singleton_op'); {
    if (undefined === $._singletoncache[_name]) $._singletoncache[_name] = $.create_op(_name, _parameters);
    /*@:1342*/
    return ($._singletoncache[_name]);
    /*@:1343*/
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
