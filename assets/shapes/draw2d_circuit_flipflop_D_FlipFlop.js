// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_flipflop_D_FlipFlop = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_flipflop_D_FlipFlop",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:41.5,height:53.69360000000006},attr), setter, getter);
     var port;
     // output_q
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(103.63403614457793, 20.281746800363283));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q");
     port.setMaxFanOut(20);
     // input_t
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-4.819277108433735, 79.03304583786486));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_t");
     port.setMaxFanOut(20);
     // input_d
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-4.819277108433735, 20.281746800363283));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_d");
     port.setMaxFanOut(20);
     // output_q_not
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(103.63403614457793, 79.03304583786486));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q_not");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 41.5;
      this.originalHeight= 53.69360000000006;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L41.5,0 L41.5,53.69360000000006 L0,53.69360000000006");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M1.5,2Q1.5,1 2.5, 1L40.5,1Q41.5,1 41.5, 2L41.5,50Q41.5,51 40.5, 51L2.5,51Q1.5,51 1.5, 50L1.5,2');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'D');
        shape.attr({"x":4,"y":11,"text-anchor":"start","text":"D","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Rectangle
        shape = this.canvas.paper.path('M1.5 37.12699999999995L13.541999999999916 42.03299999999899L1.5 47.38499999999976Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"none","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Q');
        shape.attr({"x":28.28125,"y":11.5,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Q');
        shape.attr({"x":27.78125,"y":42.69360000000006,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M27.5 36.5L35.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M27.5 36.5L35.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_flipflop_D_FlipFlop = draw2d_circuit_flipflop_D_FlipFlop.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.last_t = false;
    },
    
    calculate:function()
    {
        var d = this.getInputPort("input_d").getValue();
        var t = this.getInputPort("input_t").getValue();
        
        var q = this.getOutputPort("output_q");
        var q_ = this.getOutputPort("output_q_not");
        
        var rising = this.last_t===false && t===true; 
        
        if(rising===true){
            q.setValue(d);
            q_.setValue(!d)
        }
        this.last_t = t;
    }
});
draw2d_circuit_flipflop_D_FlipFlop.logic="// Generated Code for the Draw2D touch HTML5 lib\n//                                                        \n// http://www.draw2d.org                                  \n//                                                        \n// Go to the Designer http://www.draw2d.org               \n// to design your own shape or download user generated    \n//                                                        \nvar draw2d_circuit_flipflop_D_FlipFlop = draw2d.SetFigure.extend({            \n\n   NAME: \"draw2d_circuit_flipflop_D_FlipFlop\",\n\n   init:function(attr, setter, getter)\n   {\n     this._super( $.extend({stroke:0, bgColor:null, width:41.5,height:53.69360000000006},attr), setter, getter);\n     var port;\n     // output_q\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(103.63403614457793, 20.281746800363283));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#1C9BAB\");\n     port.setName(\"output_q\");\n     port.setMaxFanOut(20);\n     // input_t\n     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-4.819277108433735, 79.03304583786486));\n     port.setConnectionDirection(3);\n     port.setBackgroundColor(\"#1C9BAB\");\n     port.setName(\"input_t\");\n     port.setMaxFanOut(20);\n     // input_d\n     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-4.819277108433735, 20.281746800363283));\n     port.setConnectionDirection(3);\n     port.setBackgroundColor(\"#1C9BAB\");\n     port.setName(\"input_d\");\n     port.setMaxFanOut(20);\n     // output_q_not\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(103.63403614457793, 79.03304583786486));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#1C9BAB\");\n     port.setName(\"output_q_not\");\n     port.setMaxFanOut(20);\n     this.persistPorts=false;\n   },\n\n   createShapeElement : function()\n   {\n      var shape = this._super();\n      this.originalWidth = 41.5;\n      this.originalHeight= 53.69360000000006;\n      return shape;\n   },\n\n   createSet: function()\n   {\n       this.canvas.paper.setStart();\n\n        // BoundingBox\n        shape = this.canvas.paper.path(\"M0,0 L41.5,0 L41.5,53.69360000000006 L0,53.69360000000006\");\n        shape.attr({\"stroke\":\"none\",\"stroke-width\":0,\"fill\":\"none\"});\n        shape.data(\"name\",\"BoundingBox\");\n        \n        // Rectangle\n        shape = this.canvas.paper.path(\'M1.5,2Q1.5,1 2.5, 1L40.5,1Q41.5,1 41.5, 2L41.5,50Q41.5,51 40.5, 51L2.5,51Q1.5,51 1.5, 50L1.5,2\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"Rectangle\");\n        \n        // Label\n        shape = this.canvas.paper.text(0,0,\'D\');\n        shape.attr({\"x\":4,\"y\":11,\"text-anchor\":\"start\",\"text\":\"D\",\"font-family\":\"\\\"Arial\\\"\",\"font-size\":10,\"stroke\":\"none\",\"fill\":\"#080808\",\"stroke-scale\":true,\"font-weight\":\"normal\",\"stroke-width\":0,\"opacity\":1});\n        shape.data(\"name\",\"Label\");\n        \n        // Rectangle\n        shape = this.canvas.paper.path(\'M1.5 37.12699999999995L13.541999999999916 42.03299999999899L1.5 47.38499999999976Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"none\",\"opacity\":1});\n        shape.data(\"name\",\"Rectangle\");\n        \n        // Label\n        shape = this.canvas.paper.text(0,0,\'Q\');\n        shape.attr({\"x\":28.28125,\"y\":11.5,\"text-anchor\":\"start\",\"text\":\"Q\",\"font-family\":\"\\\"Arial\\\"\",\"font-size\":10,\"stroke\":\"none\",\"fill\":\"#080808\",\"stroke-scale\":true,\"font-weight\":\"normal\",\"stroke-width\":0,\"opacity\":1});\n        shape.data(\"name\",\"Label\");\n        \n        // Label\n        shape = this.canvas.paper.text(0,0,\'Q\');\n        shape.attr({\"x\":27.78125,\"y\":42.69360000000006,\"text-anchor\":\"start\",\"text\":\"Q\",\"font-family\":\"\\\"Arial\\\"\",\"font-size\":10,\"stroke\":\"none\",\"fill\":\"#080808\",\"stroke-scale\":true,\"font-weight\":\"normal\",\"stroke-width\":0,\"opacity\":1});\n        shape.data(\"name\",\"Label\");\n        \n        // Line_shadow\n        shape = this.canvas.paper.path(\'M27.5 36.5L35.5,36.5\');\n        shape.attr({\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke\":\"none\",\"stroke-width\":1,\"opacity\":1});\n        shape.data(\"name\",\"Line_shadow\");\n        \n        // Line\n        shape = this.canvas.paper.path(\'M27.5 36.5L35.5,36.5\');\n        shape.attr({\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke\":\"#000000\",\"stroke-width\":1,\"opacity\":1});\n        shape.data(\"name\",\"Line\");\n        \n\n        return this.canvas.paper.setFinish();\n   },\n\n   applyAlpha: function()\n   {\n   },\n\n   layerGet: function(name, attributes)\n   {\n      var result=null;\n      this.svgNodes.some(function(shape){\n         if(shape.data(\"name\")===name){\n            result=shape;\n         }\n         return result!==null;\n      });\n\n      return result;\n   },\n\n   layerAttr: function(name, attributes)\n   {\n     this.svgNodes.forEach(function(shape){\n             if(shape.data(\"name\")===name){\n                  shape.attr(attributes);\n             }\n     });\n   },\n\n   layerShow: function(name, flag, duration)\n   {\n      if(duration){\n        this.svgNodes.forEach(function(node){\n            if(node.data(\"name\")===name){\n                if(flag){\n                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);\n                }\n                else{\n                    node.animate({ opacity : 0 }, duration, function () { this.hide() });\n                }\n            }\n        });\n      }\n      else{\n          this.svgNodes.forEach(function(node){\n              if(node.data(\"name\")===name){\n                   if(flag){node.show();}\n                   else{node.hide();}\n               }\n           });\n      }\n   },\n\n    calculate: function()\n    {\n    },\n\n    onStart: function()\n    {\n    },\n\n    onStop:function()\n    {\n    },\n\n    /**\n     * @method\n     */\n    addPort: function(port, locator)\n    {\n        this._super(port, locator);\n        return port;\n    },\n\n    /**\n     * @method\n     * Return an objects with all important attributes for XML or JSON serialization\n     *\n     * @returns {Object}\n     */\n    getPersistentAttributes : function()\n    {\n        var memento = this._super();\n\n        // add all decorations to the memento\n        //\n        memento.labels = [];\n        this.children.each(function(i,e){\n            var labelJSON = e.figure.getPersistentAttributes();\n            labelJSON.locator=e.locator.NAME;\n            memento.labels.push(labelJSON);\n        });\n\n        return memento;\n    },\n\n    /**\n     * @method\n     * Read all attributes from the serialized properties and transfer them into the shape.\n     *\n     * @param {Object} memento\n     * @returns\n     */\n    setPersistentAttributes : function(memento)\n    {\n        this._super(memento);\n\n        // remove all decorations created in the constructor of this element\n        //\n        this.resetChildren();\n\n        // and add all children of the JSON document.\n        //\n        $.each(memento.labels, $.proxy(function(i,json){\n            // create the figure stored in the JSON\n            var figure =  eval(\"new \"+json.type+\"()\");\n\n            // apply all attributes\n            figure.attr(json);\n\n            // instantiate the locator\n            var locator =  eval(\"new \"+json.locator+\"()\");\n\n            // add the new figure as child to this figure\n            this.add(figure, locator);\n        },this));\n    }\n});\n\n/**\n * by \'Draw2D Shape Designer\'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ndraw2d_circuit_flipflop_D_FlipFlop = draw2d_circuit_flipflop_D_FlipFlop.extend({\n\n    init: function(attr, setter, getter){\n         this._super(attr, setter, getter);\n\n        this.attr({resizeable:false});\n        this.last_t = false;\n    },\n    \n    calculate:function()\n    {\n        var d = this.getInputPort(\"input_d\").getValue();\n        var t = this.getInputPort(\"input_t\").getValue();\n        \n        var q = this.getOutputPort(\"output_q\");\n        var q_ = this.getOutputPort(\"output_q_not\");\n        \n        var rising = this.last_t===false && t===true; \n        \n        if(rising===true){\n            q.setValue(d);\n            q_.setValue(!d)\n        }\n        this.last_t = t;\n    }\n});";
draw2d_circuit_flipflop_D_FlipFlop.github="./shapes/org/draw2d/circuit/flipflop/D_FlipFlop.shape";
draw2d_circuit_flipflop_D_FlipFlop.markdown="# D-FlipFlop\n\n## Description\n\nThe D FlipFLop is widely used. It is also known as a \n*data* or *delay* flip-flop.\n\nThe D flip-flop captures the value of the `D` input \nat a definite portion of the clock cycle (such \nas the rising edge of the clock). That captured \nvalue becomes the `Q` output. At other times, the \noutput Q does not change. The `D flip-flop` \ncan be viewed as a memory cell, a zero-order hold, \nor a delay line.\n\n\n## Logic table\n\n| Clock        | D       |  **Q***next*   |\n|:------------:|:-------:|:----------:|\n| Rising edge  | Low     |  **Low**       |\n| Rising edge  | High    |  **High**      |\n| non rising   | *       |  **Q***last*   |\n\n";