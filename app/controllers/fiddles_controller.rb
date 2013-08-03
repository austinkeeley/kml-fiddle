class FiddlesController < ApplicationController
  # GET /fiddles
  # GET /fiddles.json
  def index
    @fiddles = Fiddle.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @fiddles }
    end
  end

  # GET /fiddles/1
  # GET /fiddles/1.json
  def show
    @fiddle = Fiddle.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @fiddle }
    end
  end

  # GET /fiddles/new
  # GET /fiddles/new.json
  def new
    @fiddle = Fiddle.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @fiddle }
    end
  end

  # GET /fiddles/1/edit
  def edit
    @fiddle = Fiddle.find(params[:id])
  end

  # POST /fiddles
  # POST /fiddles.json
  def create
    @fiddle = Fiddle.new(params[:fiddle])

    respond_to do |format|
      if @fiddle.save
        format.html { redirect_to @fiddle, notice: 'Fiddle was successfully created.' }
        format.json { render :json => @fiddle, :status => :created, :location => @fiddle }
      else
        format.html { render :action => "new" }
        format.json { render :json => @fiddle.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /fiddles/1
  # PUT /fiddles/1.json
  def update
    @fiddle = Fiddle.find(params[:id])

    respond_to do |format|
      if @fiddle.update_attributes(params[:fiddle])
        format.html { redirect_to @fiddle, :notice => 'Fiddle was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @fiddle.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /fiddles/1
  # DELETE /fiddles/1.json
  def destroy
    @fiddle = Fiddle.find(params[:id])
    @fiddle.destroy

    respond_to do |format|
      format.html { redirect_to fiddles_url }
      format.json { head :no_content }
    end
  end
end
